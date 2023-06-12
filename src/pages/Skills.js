import React from "react";
import '../styles/Skills.css';

const data = [
    { value: 'Rust', count: 5 },
    { value: 'Java', count: 7 },
    { value: 'C++', count: 7 },
    { value: 'Python', count: 10 },
    { value: 'JavaScript', count: 10 },
    { value: 'React', count: 9 },
    { value: 'Node.js', count: 5 },
    { value: 'HTML5', count: 8 },
    { value: 'CSS3', count: 8 },
    { value: 'MySql', count: 3 },
    { value: 'MySql', count: 4 },
    { value: 'Linux', count: 6 },
    { value: 'Git', count: 8 },
    { value: 'Machine Learning', count: 9 },
    { value: 'Unity', count: 6 },
    { value: 'Blockchain', count: 4 },
    { value: 'PHP', count: 4 },
  ]

  const getRandomColor = () => {
    const colors = [
        '#34495e', '#2c3e50', '#7f8c8d', '#95a5a6',
        '#8e44ad', '#27ae60', '#d35400', '#c0392b',
        '#2980b9', '#1abc9c', '#8e44ad', '#f39c12',
        '#d35400', '#d35400', '#c0392b', '#7f8c8d',
        '#9b59b6', '#2ecc71', '#e67e22', '#3498db',
        '#16a085', '#f1c40f', '#e74c3c', '#3498db',
        '#34495e', '#7f8c8d', '#95a5a6', '#f39c12'
      ];
  
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const shuffledData = shuffleArray(data);

const Skills = () => {
    return(
        <div className="skills">
            {shuffledData.map((item, index) => (
            <div 
            key={index} 
            style={{ fontSize: `${item.count/1.5}rem`, color: getRandomColor(), }} 
            >
                {item.value} 
            </div>
            ))}
        </div>
    );
};

export default Skills;