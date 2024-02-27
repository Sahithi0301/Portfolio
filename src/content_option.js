import logoImage from '../src/images/image.jpg'; 

const logotext = <img src={logoImage} alt="Sahithi" style={{ width: "90px", height: "auto" , marginLeft: "-30px"}} />;
const meta = {
    title: "Sahithi",
    description: "I’m Sahithi Arekatla - Graduate student Boston University",
};

const introdata = {
    head:"I’m ",
    title: "Sahithi Arekatla",
    animated: {
        first: "I am a programmer",
        second: "I am a developer",
        third: "I am a data wizard ",
    },
    description: "Techfreak by intention! Take a look at my works and skills and get in touch with me for collaborations.",
};

const dataabout = {
    img: require("../src/images/Sahithi_Arekatla1060.jpg").default,
    aboutme: "I am a passionate, self-motivated and ambitious person. I am a graduate with Master's degree in Computer Science from Boston University. I possess a deep desire to continually enhance my knowledge and skills in this rapidly-evolving field. With a strong focus on learning and adaptability, I am committed to leveraging the latest technologies and tools to develop innovative solutions that deliver value to businesses and society at large."
};



const dataportfolio = [
    {
        img: "https://picsum.photos/id/180/200/300",
        title:"Github Repo Analysis",
        description: "An all-in-one platform for university professors to depict statistical analysis of involvement of team members by git activities in a project with effective visualizations",
        link: "https://gitrepoanalysis.onrender.com/",
       
          
    },
    {
        img: "https://picsum.photos/id/133/200/300",
        title:"Car Features and Price Insights",
        description: "Datawarehouse for depicting the variation of car prices based on the car features.",
        link: "https://github.com/Sahithi0301/Datawarehouse-for-Car-prices-and-features-analysis",
       
          
    },


    {
        img: "https://picsum.photos/id/382/200/300",
        title:"Car Performance Prediction",
        description: "A web application which predicts the performance of the car based on the parameters. .",
        link: "https://github.com/Lohithviswa/llSPS-INT-182-Car-Performance-Prediction",
       
          
    },
    {
        img: "https://picsum.photos/id/692/200/300",
        title:"Department Website",
        description: "Built a web application that helps students find department information, schedules, and announcements.",
        link: "https://github.com/Sahithi0301/Department_Website",
    },
    {
        img: "https://picsum.photos/id/680/200/300",
        title:"Sign Language Gesture Detection",
        description: "An object detection model for physically impaired people to communicate with others.",
        link: "https://github.com/Sahithi0301/MajorProject_SignLanguageGestureDetection",
    },
    
    {
        img: "https://picsum.photos/id/1066/200/300",
        title:"Hospital Management App",
        description: " An application in which users can see nearby hospitals and book appointments online with additional features to store medical documents and blood donation",
        link: "https://github.com/Sahithi0301/miniproject_userApp",
    },
    {
        img: "https://picsum.photos/id/1014/200/300",
        title:"Quick Share",
        description: "One Tap Location Share.Finds the location by single tap using latitude and longitude.",
        link: "https://github.com/Sahithi0301/TechNerds_QuickShare",
    },

    {
        img: "https://picsum.photos/id/1048/200/300",
        title:"Loan Repayment Prediction",
        description: " A web application which predicts if a person can pay back his loan or not with the given user inputs. ",
        link: "https://github.com/Sahithi0301/Predicting-Loan-Repayment-Ability-DS-June",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "sahithi.arekatla07@gmail.com",
    YOUR_FONE: "+1-(857)3767440",
    description: "If you want to discuss further with me regarding any future works, opportunities or need any help from me. Please drop a mail to me. I will get back to you",
    
  };

const socialprofils = {
    linkedin: "https://www.linkedin.com/in/sahithi-arekatla/",
    github: "https://github.com/Sahithi0301",
    leetcode: " https://leetcode.com/sahithiarekatla/",
    facebook: "https://www.facebook.com/sahithi.arekatla/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};