/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Module 1: Robotic Nervous System',
      items: [
        'module1/ros2-nodes',
        'module1/urdf-guides',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin',
      items: [
        'module2/gazebo-physics',
        'module2/unity-rendering',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: AI-Robot Brain',
      items: [
        'module3/isaac-sim',
        'module3/nav2-planning',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action',
      items: [
        'module4/vla-models',
        'module4/whisper-integration',
      ],
    },
  ],
};

module.exports = sidebars;