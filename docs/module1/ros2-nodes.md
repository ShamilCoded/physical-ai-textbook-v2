---
sidebar_position: 1
title: The Robotic Nervous System
---


# ROS 2 Nodes and Core Concepts


## Module Focus
This module focuses on the **Robotic Nervous System**, serving as the middleware for robot control. ROS 2 enables modular, distributed robot software architecture and real-time performance.


## Core Architecture
To master ROS 2, you must understand its architecture and core concepts. The fundamental building blocks include:


* **Nodes:** The executable processes that perform computation. Each node is an isolated, independent program, which can communicate with other nodes via topics, services, or actions.
* **Topics:** Named channels over which nodes exchange asynchronous messages. Nodes can publish to or subscribe from topics.
* **Services:** Request/reply communication between nodes. Useful for synchronous operations where the caller waits for a response.
* **Actions:** Goal-oriented communication for long-running tasks. Actions allow a node to send a goal to another node and receive feedback, result, or cancellation.


### Node Communication Overview
| Communication Type | Description |
|-------------------|-------------|
| Topic | Publish/Subscribe, asynchronous |
| Service | Request/Reply, synchronous |
| Action | Goal/Feedback/Result, asynchronous, long-running |


## Development
In this module, you will learn to:


1. **Build Packages:** Create ROS 2 packages using Python. This includes defining `setup.py`, `package.xml`, and organizing nodes.
2. **Bridge Agents:** Connect Python Agents to ROS controllers using `rclpy`. You will learn to write nodes that subscribe/publish data and interact with hardware or simulations.
3. **Manage Parameters:** Utilize launch files and parameter management for system configuration. Parameters enable dynamic configuration without modifying node code.


### Sample Python Node Structure
```python
import rclpy
from rclpy.node import Node


class SimpleNode(Node):
def __init__(self):
super().__init__('simple_node')
self.get_logger().info('Node has started')


def main(args=None):
rclpy.init(args=args)
node = SimpleNode()
rclpy.spin(node)
node.destroy_node()
rclpy.shutdown()


if __name__ == '__main__':
main()
```


## Assessment
You will be assessed on a **ROS 2 package development project** that includes:
* Node implementation with publishers/subscribers
* Service and action integration
* Parameter handling and launch configuration
* Proper code documentation and structure