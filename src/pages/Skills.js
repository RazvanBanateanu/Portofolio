import React from "react";
import '../styles/Skills.css';

const windowWidth = window.innerWidth;

const data = [
    { value: 'Rust', count: 4 },
    { value: 'Java', count: 6 },
    { value: 'C++', count: 6 },
    { value: 'Python', count: 8 },
    { value: 'JavaScript', count: 8 },
    { value: 'React', count: 7 },
    { value: 'Node.js', count: 5 },
    { value: 'HTML5', count: 7 },
    { value: 'CSS3', count: 7 },
    { value: 'MySql', count: 3 },
    { value: 'MySql', count: 4 },
    { value: 'Linux', count: 6 },
    { value: 'Git', count: 7 },
    { value: 'Machine Learning', count: 6 },
    { value: 'Unity', count: 4 },
    { value: 'Blockchain', count: 3 },
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

  const getFontSize = (count) => {
    if (windowWidth > 1200) {
        return `${count / 1.5}rem`;
    } else if (windowWidth > 800) {
        return `${count / 2}rem`;
    } else {
        return `${count / 3.5}rem`;
    }
};

const Skills = () => {
    return(
        <div className="skills-container">
          <div className="space"></div>
          <div className="skills">
            {shuffledData.map((item, index) => (
            <div 
            key={index} 
            style={{ fontSize: getFontSize(item.count), color: getRandomColor(), }} 
            >
                {item.value} 
            </div>
            ))}
          </div>
        </div>
    );
};

export default Skills;