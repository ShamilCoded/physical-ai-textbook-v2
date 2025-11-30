import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🧠 Module 1: ROS 2 Core',
    description: (
      <>
        Master the <strong>Robotic Nervous System</strong>. Learn Nodes, Topics, and Services to control humanoid hardware.
      </>
    ),
  },
  {
    title: '🌐 Module 2: Simulation',
    description: (
      <>
        Build <strong>Digital Twins</strong> in Gazebo & Unity. Simulate physics, gravity, and sensors before going real.
      </>
    ),
  },
  {
    title: '🤖 Module 3: Physical AI',
    description: (
      <>
        Deploy <strong>Embodied Intelligence</strong> using NVIDIA Isaac Sim and Vision-Language-Action (VLA) models.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* We removed the SVG icon here to keep it clean and simple with Emojis in the title */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}