"use client";

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic';
import { videos } from "./vidoes"
import gsap from 'gsap'
import './page.css'

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false })

export default function VideoSlider() {
    const sliderRef = useRef(null);
    const overlayRef = useRef(null);
    const overlayContentRef = useRef(null);
    const clickTimer = useRef(null);
    const [isAnimating, setIsamimating] = useState(false);
    const [expandedIdx, setExpandedIdx] = useState(-1);
    const [isClient, setIsclient] = useState(false);

    const initializeCards = (cardsArg) => {
        const cards = cardsArg || Array.from(sliderRef.current.querySelectorAll(".card"))
        const count = cards.length;
        const mid = (count - 1) / 2;
        gsap.to(cards, {
            x: (i) => (i - mid) * 22 + "vw",
            scale: (i) => Math.max(0.6, 1 - Math.abs(i - mid) * 0.12),
            z: (i) => -Math.abs(i - mid) * 8,
            duration: 1,
            ease:"power3.out",
            stagger:-0.1,
        })
    }

    function cycleCards() {
        if (isAnimating) return;
        setIsamimating(true);
        const slider = sliderRef.current;
        const cards = Array.from(slider.querySelectorAll(".card"));
        const lastCard = cards.pop();

        gsap.to(lastCard, {
            x: "+=150vw",
            scale: 0.4,
            duration: 0.75,
            ease: "power3.inOut",
            onComplete: () => {
                slider.prepend(lastCard);
                initializeCards();
                setTimeout(() => { setIsamimating(false); }, 1000);
            }
        });
    }

    function expandCard(index, e) {
        const cards = sliderRef.current.querySelectorAll(".card");
        gsap.to(cards, { opacity: 0, duration: 0.3, pointerEvents: "none" });
        setExpandedIdx(index);
    }

    function collapseCard() {
        if (expandedIdx === -1) return;
        gsap.to(overlayRef.current, {
            autoAlpha: 0,
            duration: 0.3,
            onComplete: () => {
                gsap.set(overlayRef.current, { display: "none" });
                setExpandedIdx(-1);
                const cards = sliderRef.current.querySelectorAll(".card");
                gsap.set(cards, { clearProps: "opacity,pointerEvents" });
                initializeCards();
            }
        });
    }

    function handleCardClick(index, e) {
        if (clickTimer.current) {
            clearTimeout(clickTimer.current);
            clickTimer.current = null;
            expandCard(index, e);
        } else {
            clickTimer.current = setTimeout(() => {
                clickTimer.current = null;
                e.stopPropagation();
                cycleCards();
            }, 250);
        }
    }

    useEffect(() => {
        if (expandedIdx === -1 || !overlayRef.current) return;
        gsap.set(overlayRef.current, { display: "flex", autoAlpha: 0 });
        gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.4 });
    }, [expandedIdx]);

    useEffect(() => {
        setIsclient(true);
        const handler = (e) => {
            if (e.reason?.name === 'AbortError') {
                e.preventDefault();
            }
        };
        window.addEventListener('unhandledrejection', handler);
        return () => {
            if (clickTimer.current) clearTimeout(clickTimer.current);
            window.removeEventListener('unhandledrejection', handler);
        };
    }, []);

    useEffect(()=> {
        if (isClient && sliderRef.current) {
            initializeCards();
        }
    }, [isClient, sliderRef]);


    
    return (
        <div className="video-slider-wrapper">
        <div className="container">
            <div className="slider" ref={sliderRef}>
                {videos.map((video, i) => (
                    <div className='card' key={video.id} onClick={(e) => handleCardClick(i, e)}>
                        <div className='card-info'>
                            <div className='card-item'>
                                <p>{video.date}</p>
                            </div>
                            <div className='card-item'>
                                <p>{video.title}</p>
                            </div>
                            <div className='card-item'>
                                <p>{video.category}</p>
                            </div>
                        </div>
                        <div className="video-player">
                            <ReactPlayer
                                src={video.src}
                                controls={false}
                                loop={true}
                                playing
                                muted
                                width='100%'
                                height='100%'
                                onError={(e) => {
                                    if (e?.name === 'AbortError') return;
                                    console.warn('Video error:', video.title, e);
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className="expanded-overlay" ref={overlayRef} onClick={collapseCard}>
            <div className="expanded-content" ref={overlayContentRef} onClick={(e) => e.stopPropagation()}>
                <button className="expanded-close" onClick={collapseCard}>
                    ✕
                </button>
                {expandedIdx !== -1 && (
                    <ReactPlayer
                        src={videos[expandedIdx].src}
                        controls={true}
                        loop={true}
                        playing
                        muted
                        width='100%'
                        height='100%'
                        onError={(e) => {
                            if (e?.name === 'AbortError') return;
                            console.warn('Video error:', videos[expandedIdx].title, e);
                        }}
                    />
                )}
            </div>
        </div>
        </div>
    )
}
