export const signUpFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];

export const signInFormControls = [
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};

export const languageOptions = [
  { id: "english", label: "English" },
  { id: "hindi", label: "Hindi" },
  { id: "bengali", label: "Bengali" },
  { id: "telugu", label: "Telugu" },
  { id: "tamil", label: "Tamil" },
  { id: "malayalam", label: "Malayalam" },
  { id: "kannada ", label: "Kannada" },
  { id: "marathi", label: "Marathi" },
  { id: "gujarati", label: "Gujarati" },
  { id: "punjabi", label: "Punjabi" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
  { id: "chinese", label: "Chinese" },
  { id: "japanese", label: "Japanese" },
  { id: "korean", label: "Korean" },
  { id: "portuguese", label: "Portuguese" },
  { id: "arabic", label: "Arabic" },
  { id: "russian", label: "Russian" },
  { id: "nepali", label: "Nepali" },
];

export const courseLevelOptions = [
  { id: "beginner", label: "Beginner" },
  { id: "intermediate", label: "Intermediate" },
  { id: "advanced", label: "Advanced" },
];

export const courseCategories = [
  { id: "Web Development", label: "Web Development" },
  { id: "Backend Development", label: "Backend Development" },
  { id: "Full Stack Development", label: "Full Stack Development" },
  { id: "Data Science", label: "Data Science" },
  { id: "Artificial Intelligence", label: "Artificial Intelligence" },
  { id: "Cloud Computing", label: "Cloud Computing" },
  { id: "Cyber Security", label: "Cyber Security" },
  { id: "Mobile Development", label: "Mobile Development" },
  { id: "Game Development", label: "Game Development" },
  { id: "Software Engineering", label: "Software Engineering" },
  { id: "DevOps", label: "DevOps" },
  { id: "Digital Marketing", label: "Digital Marketing" },
  { id: "SSC Exam", label: "SSC Exam" },
  { id: "Bank Exam", label: "Bank Exam" },
  { id: "State PCS", label: "State PCS" },
  { id: "UPSC CSE", label: "UPSC CSE" },
  { id: "UPSC IES", label: "UPSC IES" },
  { id: "UPSC CDS", label: "UPSC CDS" },
  { id: "NDA", label: "NDA" },
  { id: "Railway Exam", label: "Railway Exam" },
  { id: "IIT-JEE", label: "IIT-JEE" },
  { id: "NEET", label: "NEET" },
  { id: "GATE", label: "GATE" },
  { id: "GRE", label: "GRE" },
  { id: "GMAT", label: "GMAT" },
  { id: "CAT", label: "CAT" },
  { id: "CUET", label: "CUET" },
  { id: "Law Entrance Exams", label: "Law Entrance Exams" },
  { id: "Spoken Language", label: "Spoken Language" },
  { id: "Soft Skills", label: "Soft Skills" },
  { id: "Art, Music & Drama", label: "Art, Music & Drama" },
  { id: "Personal Finance", label: "Personal Finance" },
  { id: "Business", label: "Business" },
  { id: "Cooking", label: "Cooking" },
  { id: "Fitness", label: "Fitness" },
];


export const courseLandingPageFormControls = [
  {
    name: "title",
    label: "Title",
    componentType: "input",
    type: "text",
    placeholder: "Enter course title",
  },
  {
    name: "category",
    label: "Category",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseCategories,
  },
  {
    name: "level",
    label: "Level",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: courseLevelOptions,
  },
  {
    name: "primaryLanguage",
    label: "Primary Language",
    componentType: "select",
    type: "text",
    placeholder: "",
    options: languageOptions,
  },
  {
    name: "subtitle",
    label: "Subtitle",
    componentType: "input",
    type: "text",
    placeholder: "Enter course subtitle",
  },
  {
    name: "description",
    label: "Description",
    componentType: "textarea",
    type: "text",
    placeholder: "Enter course description",
  },
  {
    name: "pricing",
    label: "Pricing",
    componentType: "input",
    type: "number",
    placeholder: "Enter course pricing",
  },
  {
    name: "objectives",
    label: "Objectives",
    componentType: "textarea",
    type: "text",
    placeholder: "Enter course objectives",
  },
  {
    name: "welcomeMessage",
    label: "Welcome Message",
    componentType: "textarea",
    placeholder: "Welcome message for students",
  },
];

export const courseLandingInitialFormData = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};

export const courseCurriculumInitialFormData = [
  {
    title: "",
    videoUrl: "",
    freePreview: false,
    public_id: "",
  },
];

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const filterOptions = {
  category: courseCategories,
  level: courseLevelOptions,
  primaryLanguage: languageOptions,
};

export const testimonials = [
  {
    name: "Anjali Sharma",
    course: "Python AI/ML",
    testimonial:
      "The Python AI/ML course transformed my career! The hands-on projects and expert guidance helped me land a data scientist role at a top tech firm. The course structure was perfect for beginners and advanced learners alike.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
  },
  {
    name: "Rahul Verma",
    course: "UPSC Preparation",
    testimonial:
      "The UPSC course was a game-changer. Comprehensive study materials and mock tests prepared me thoroughly. I cleared the prelims on my first attempt, thanks to the dedicated mentors!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
  },
  {
    name: "Priya Menon",
    course: "IIT JEE Preparation",
    testimonial:
      "The IIT JEE course was rigorous and well-structured. The faculty’s insights and practice questions were spot-on. I secured a seat at IIT Bombay, and I owe it to this course!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400",
  },
  {
    name: "Amit Patel",
    course: "NEET Preparation",
    testimonial:
      "The NEET course provided in-depth biology and chemistry modules. The mock tests mirrored the actual exam, boosting my confidence. I’m now studying at a top medical college!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
  },
  {
    name: "Sneha Gupta",
    course: "Bank Exam Preparation",
    testimonial:
      "The bank exam course was tailored for success. Quantitative aptitude and reasoning sections were simplified, and the practice tests were invaluable. I’m now a probationary officer at SBI!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=400",
  },
  {
    name: "Vikram Singh",
    course: "Java Development",
    testimonial:
      "The Java course was perfect for breaking into tech. From OOP concepts to real-world projects, it covered everything. I landed a Java developer role at a leading IT company!",
    image: "https://avatars.githubusercontent.com/u/103264?v=4?q=80&w=400",
  },
  {
    name: "Neha Reddy",
    course: "SSC Exam Preparation",
    testimonial:
      "The SSC course made complex topics easy to understand. The faculty’s tips and regular assessments helped me clear the CGL exam. I’m now a government officer!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400", 
  },
  {
    name: "Arjun Nair",
    course: "Guitar Lessons",
    testimonial:
      "Learning guitar was a dream come true! The art teacher’s patient guidance and structured lessons helped me perform at a local event. I’m now confident in my skills!",
    image: "https://images.unsplash.com/photo-1521334884684-d80222895322?q=80&w=400",
  },
];

export const faculty = [
  {
    name: "Dr. Rakesh Kumar",
    subject: "Python AI/ML",
    bio:
      "With a PhD in Machine Learning and 10+ years in data science, Dr. Kumar has trained over 5,000 students. His industry experience at Google ensures practical, cutting-edge AI/ML training.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400",
  },
  {
    name: "Aaditya B Chatterjee",
    subject: "UPSC Preparation",
    bio:
      "Renouned teacher and founder of e-Renaissance. Specializes in UPSC strategy, Public Administration, International Politics, and GS Paper-2. He has mentored 100+ successful candidates for civil services.",
    image: "https://avatars.githubusercontent.com/u/57300089?v=4?q=80&w=400",
  },
  {
    name: "Dr. Vikash Sharma",
    subject: "IIT JEE Preparation",
    bio:
      "An IIT Delhi alumnus with 12 years of teaching physics, Dr. Sharma’s innovative methods have helped 200+ students secure top ranks in JEE Advanced.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=400",
  },
  {
    name: "Dr. Meena Patel",
    subject: "NEET Preparation",
    bio:
      "A renowned biologist with 20 years of experience, Dr. Patel’s NEET coaching has produced top medical students. Her focus on concept clarity is unmatched.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=400",
  },
  {
    name: "Prof. Sanjay Gupta",
    subject: "Bank Exam Preparation",
    bio:
      "With 18 years of teaching quantitative aptitude, Prof. Gupta has guided thousands to success in bank exams. His shortcut techniques are student favorites.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400",
  },
  {
    name: "Arvind Menon",
    subject: "Java Development",
    bio:
      "A senior Java developer with 15 years at Oracle, Arvind’s courses blend theory with real-world projects. He has trained 3,000+ aspiring developers.",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=400",
  },
  {
    name: "Dr. Sunita Rao",
    subject: "SSC Exam Preparation",
    bio:
      "With a doctorate in public administration, Dr. Rao’s SSC coaching is renowned for its clarity. She has helped 1,500+ students secure government jobs.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=400",
  },
  {
    name: "Maestro Anil Varghese",
    subject: "Guitar Lessons",
    bio:
      "A celebrated guitarist with 25 years of performance experience, Anil’s teaching style is engaging. He has trained 800+ students to master the guitar.",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400",
  },
];