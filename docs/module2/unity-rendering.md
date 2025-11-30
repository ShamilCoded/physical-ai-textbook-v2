---
sidebar_position: 2
title: Unity Rendering
---

# Unity for Visualization

## High-Fidelity Rendering
While Gazebo handles physics, Unity is utilized for **high-fidelity rendering and human-robot interaction**. Unity enables visually rich environments with realistic lighting, shadows, textures, and animations, which are crucial for human-centered robotics testing.

## Visualization
This section introduces Unity as a tool for robot visualization. It allows for the creation of visually realistic environments to test how humanoids interact within human-centric spaces. Unity supports:

* **Realistic Materials & Textures:** Apply materials, shaders, and textures for lifelike appearance.
* **Lighting & Shadows:** Simulate dynamic and static lighting for realistic perception.
* **Animation & Interaction:** Animate robot movements, humanoid gestures, and environment responses.
* **Integration with ROS 2:** Communicate robot states, sensor data, and control commands between ROS 2 and Unity using ROS-TCP or ROS# packages.

### Sample Unity Integration Workflow
1. Export robot URDF/SDF or mesh models.
2. Import models into Unity.
3. Set up physics colliders and rigidbodies.
4. Connect ROS 2 topics using ROS-TCP Connector or ROS#.
5. Visualize robot movement, sensors, and interactions in real time.

This approach enhances the realism of robot testing beyond pure physics simulations, enabling better user experience and interaction design.