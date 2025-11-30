---
sidebar_position: 2
title: URDF & Robot Descriptions
---

# Understanding URDF for Humanoids

## Robot Description Formats
To control a humanoid robot, we must first define its physical structure digitally. This section covers **URDF (Unified Robot Description Format)** and **SDF (Simulation Description Format)**. These formats allow you to describe links, joints, sensors, and other physical properties of robots in a machine-readable format.

### URDF vs SDF
| Feature | URDF | SDF |
|---------|------|-----|
| Focus   | Robot structure | Robot + environment + sensors |
| Complexity | Simple, lightweight | More detailed, supports complex simulations |
| Use Case | Basic kinematics, ROS integration | Full simulation in Gazebo, including physics and dynamics |

## Application
You will learn to:

* **Define the physical structure of humanoids using URDF:** Create XML-based descriptions of robot links, joints, and kinematics.
* **Understand the differences between URDF and SDF for simulation environments:** Choose the right format depending on your simulation or deployment needs.
* **Prepare robot descriptions for use in simulation tools like Gazebo:** Integrate URDF/SDF files into Gazebo for visualization and testing.

### Sample URDF Snippet for a Humanoid Link
```xml
<robot name="humanoid_robot">
  <link name="base_link">
    <visual>
      <geometry>
        <box size="0.5 0.3 0.2"/>
      </geometry>
      <material name="blue">
        <color rgba="0 0 1 1"/>
      </material>
    </visual>
  </link>
  <joint name="joint1" type="revolute">
    <parent link="base_link"/>
    <child link="upper_arm"/>
    <origin xyz="0 0 0.2" rpy="0 0 0"/>
    <axis xyz="0 1 0"/>
  </joint>
</robot>
```

This snippet defines a base link and a revolute joint connecting to an upper arm link, demonstrating the basic structure of a humanoid in URDF.