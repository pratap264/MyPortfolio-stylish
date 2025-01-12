            
import React, { useEffect } from "react";
import "./TextShpere.css";
import '@fontsource/la-belle-aurore'; // Defaults to 400 weight


// Importing TagCloud package
import TagCloud from 'tagcloud';


const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Next",
        "NodeJS",
        "JAVA",
        "SPINGBOOT",
        "SQL",
        "ANGULAR",
        "GITHUB",
        "EXPRESS",
        "DOTNET",
        "GCP",
        "AWS",
        "JENKINS",
        "UI/UX",
        "MICROSERVICES",
        "SYSTEM DESIGN",
        "REST APIS",
        "C++",
        "TYPESCRIPT",
        "AI",
      ];

      const options = {
        radius: 400,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };

      
  const tagCloudInstance = TagCloud(container, texts, options);

  return () => {
    if (tagCloudInstance) {
      tagCloudInstance.destroy();
    }
  };
    };
  }, []);useEffect(() => {
    try {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Next",
        "NodeJS",
        "JAVA",
        "SPRINGBOOT",
        "SQL",
        "ANGULAR",
        "GITHUB",
        "EXPRESS",
        "DOTNET",
        "GCP",
        "AWS",
        "JENKINS",
        "UI/UX",
        "MICROSERVICES",
        "SYSTEM DESIGN",
        "REST APIS",
        "C++",
        "TYPESCRIPT",
        "AI",
      ];
  
      const options = {
        radius: 400,
        maxSpeed: "normal",
        initSpeed: "normal",
        keep: true,
      };
  
      TagCloud(container, texts, options);
    } catch (error) {
      console.error("Error initializing TagCloud:", error);
    }
  }, []);
  

  return (
    <>
      <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;