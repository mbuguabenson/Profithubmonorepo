import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LabelPairedPuzzlePieceTwoCaptionBoldIcon,
    LabelPairedSlidersCaptionRegularIcon,
    LabelPairedCopyCaptionRegularIcon,
    LabelPairedChartLineCaptionRegularIcon,
} from '@deriv/quill-icons/LabelPaired';
import './initial-loader.scss';

const DIAGNOSTIC_LOGS = [
    '[SYS] INITIATING SECURE HANDSHAKE...',
    '[SYS] CORE_ALGORITHM_HANDSHAKE: ACTIVE',
    '[NET] WS_GATEWAY_LATENCY_SYNC: 12ms',
    '[NET] ESTABLISHING WSS CONNECTION...',
    '[SEC] ENCRYPTING DATA STREAMS: SHA-256',
    '[UI]  LOADING NEURAL CORE UI V9.0',
    '[SYS] MARKET_DATA_FEED: CONNECTED',
    '[SYS] USER_STREAM_INTEGRATION: READY',
    '[SYS] FINALIZING INITIALIZATION...',
];

const FEATURES = [
    {
        title: 'Bot Builder',
        description: 'Drag-and-drop visual algorithmic trading',
        icon: LabelPairedPuzzlePieceTwoCaptionBoldIcon,
    },
    {
        title: 'Auto Trader',
        description: 'Advanced automated strategy execution',
        icon: LabelPairedSlidersCaptionRegularIcon,
    },
    {
        title: 'Copy Engine',
        description: 'Mirror top-performing technical traders',
        icon: LabelPairedCopyCaptionRegularIcon,
    },
    {
        title: 'Analysis Core',
        description: 'Predictive market & digit distribution data',
        icon: LabelPairedChartLineCaptionRegularIcon,
    },
];

export default function InitialLoader() {
    const [progress, setProgress] = useState(0);
    const [logIndex, setLogIndex] = useState(0);
    const [featureIndex, setFeatureIndex] = useState(0);

    // Progress Simulation (High Precision)
    useEffect(() => {
        let startTime = Date.now();
        const duration = 12000; // 12 seconds loading

        const animate = () => {
            const now = Date.now();
            const elapsed = now - startTime;
            const currentProgress = Math.min((elapsed / duration) * 100, 99.99);
            setProgress(currentProgress);

            if (elapsed < duration) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }, []);

    // Logs & Features cycling
    useEffect(() => {
        const logInterval = setInterval(() => {
            setLogIndex(prev => Math.min(prev + 1, DIAGNOSTIC_LOGS.length - 1));
        }, 1200);

        const featureInterval = setInterval(() => {
            setFeatureIndex(prev => (prev + 1) % FEATURES.length);
        }, 3000);

        return () => {
            clearInterval(logInterval);
            clearInterval(featureInterval);
        };
    }, []);

    const CurrentIcon = FEATURES[featureIndex].icon;

    return (
        <div className='premium-loader-container'>
            {/* Prism Grid Background */}
            <div className='prism-mesh-bg'>
                <div className='mesh-grid'></div>
                <div className='mesh-scanner'></div>
                <div className='ambient-glow cyan'></div>
                <div className='ambient-glow indigo'></div>
            </div>

            <motion.div
                className='loader-content-wrapper'
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                {/* Brand Header */}
                <div className='brand-header'>
                    <img src='/logo-ph.png' alt='PH Logo' className='brand-logo' />
                    <h1 className='brand-title'>
                        EXPERTS<span className='text-cyan'>TRADE</span>
                    </h1>
                </div>

                {/* Main HUD Display */}
                <div className='hud-display'>
                    <div className='hud-top-bar'>
                        <span className='hud-label'>NEURAL INTERFACE INITIALIZATION</span>
                        <span className='hud-version'>v9.0.0-CORE</span>
                    </div>

                    {/* Progress Readout */}
                    <div className='progress-section'>
                        <div className='progress-metrics'>
                            <span className='metric-label'>INTEGRATION STATUS</span>
                            <span className='metric-value'>{progress.toFixed(2)}%</span>
                        </div>
                        <div className='progress-bar-container'>
                            <div className='progress-track'>
                                <motion.div className='progress-fill' style={{ width: `${progress}%` }} />
                                <div className='progress-glow-point' style={{ left: `${progress}%` }} />
                            </div>
                        </div>
                    </div>

                    {/* Tracker Statuses */}
                    <div className='trackers-row'>
                        <div className={`tracker-item ${progress > 20 ? 'active' : 'pending'}`}>
                            <div className='tracker-dot' />
                            <span>WS_GATEWAY</span>
                        </div>
                        <div className={`tracker-item ${progress > 50 ? 'active' : 'pending'}`}>
                            <div className='tracker-dot' />
                            <span>MARKET_DATA</span>
                        </div>
                        <div className={`tracker-item ${progress > 85 ? 'active' : 'pending'}`}>
                            <div className='tracker-dot' />
                            <span>USER_STREAM</span>
                        </div>
                    </div>
                </div>

                {/* Feature Calibration & Logs Row */}
                <div className='bottom-panels'>
                    {/* Feature Highlight Loop */}
                    <div className='feature-panel'>
                        <div className='panel-header'>MODULE CALIBRATION</div>
                        {/* @ts-ignore */}
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={featureIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className='feature-content'
                            >
                                <CurrentIcon className='feature-icon' iconSize='sm' />
                                <div className='feature-text'>
                                    <h3 className='feature-title'>{FEATURES[featureIndex].title}</h3>
                                    <p className='feature-desc'>{FEATURES[featureIndex].description}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Diagnostic Logs */}
                    <div className='diagnostic-panel'>
                        <div className='panel-header'>DIAGNOSTIC TRACE</div>
                        <div className='logs-container'>
                            {DIAGNOSTIC_LOGS.slice(Math.max(0, logIndex - 4), logIndex + 1).map((log, i) => (
                                <motion.div
                                    key={log + i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`log-line ${i === Math.min(logIndex, 4) ? 'log-highlight' : 'log-dim'}`}
                                >
                                    {log}
                                </motion.div>
                            ))}
                            <div className='cursor-blink'>_</div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
