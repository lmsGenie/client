import { ICategory, ICoursePartial } from "./types/course/index.ts";
import { IUserPartial } from "./types/user/index.ts";

export const categories: ICategory[] = [
  {
    id: "1",
    name: "Label",
    path: "courses/label",
    iconId: "Cpu",
    totalCourses: 63476,
  },
  {
    id: "2",
    name: "Business",
    path: "courses/business",
    iconId: "Handshake",
    totalCourses: 52822,
  },
  {
    id: "3",
    name: "Finance & Accounting",
    path: "courses/finance-accounting",
    iconId: "CreditCard",
    totalCourses: 33841,
  },
  {
    id: "4",
    name: "IT & Software",
    path: "courses/it-software",
    iconId: "ChartBarHorizontal",
    totalCourses: 33841,
  },
  {
    id: "5",
    name: "Personal Development",
    path: "courses/personal-development",
    iconId: "BugDroid",
    totalCourses: 20126,
  },
  {
    id: "6",
    name: "Office Productivity",
    path: "courses/office-productivity",
    iconId: "Receipt",
    totalCourses: 13932,
  },
  {
    id: "7",
    name: "Marketing",
    path: "courses/marketing",
    iconId: "MegaphoneSimple",
    totalCourses: 12068,
  },
  {
    id: "8",
    name: "Photography & Video",
    path: "courses/photography-video",
    iconId: "Camera",
    totalCourses: 6196,
  },
  {
    id: "9",
    name: "Lifestyle",
    path: "courses/lifestyle",
    iconId: "Package",
    totalCourses: 2736,
  },
  {
    id: "10",
    name: "Design",
    path: "courses/design",
    iconId: "PenNib",
    totalCourses: 2600,
  },
  {
    id: "11",
    name: "Health & Fitness",
    path: "courses/data-analytics",
    iconId: "FirstAidKit",
    totalCourses: 1678,
  },
  {
    id: "12",
    name: "Music",
    path: "courses/music",
    iconId: "Headphones",
    totalCourses: 959,
  },
];

export const users: IUserPartial[] = [
  {
    id: "1",
    firstName: "Vako",
    lastName: "Shvili",
    email: "vakoshvili@gmail.com",
    phoneNumber: "7999797979",
    password: "**********",
    passwordChangedAt: undefined,
    role: "INSTRUCTOR",
    biography: "Web Designer & Best-Selling Instructor",
    socialProfiles: undefined,
    profilePicture:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
    slug: "vako-shvili",
    rating: 5,
    totalStudents: 0,
    enrolledCourses: undefined,
    wishlist: undefined,
    isActive: true,
    isEmailVerified: true,
    loginCount: 100,
  },
  {
    id: "1",
    firstName: "Alex",
    lastName: "Chem",
    email: "alex@gmail.com",
    phoneNumber: "7999797979",
    password: "**********",
    passwordChangedAt: undefined,
    role: "INSTRUCTOR",
    biography: "Web Designer & Best-Selling Instructor",
    socialProfiles: undefined,
    profilePicture:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862572/lmsGenie%20assets/user/user4_qp6e9h.jpg",
    slug: "alex-chem",
    rating: 5,
    totalStudents: 0,
    enrolledCourses: undefined,
    wishlist: undefined,
    isActive: true,
    isEmailVerified: true,
    loginCount: 100,
  },
  {
    id: "1",
    firstName: "Shivani",
    lastName: "Kumari",
    email: "shivani@gmail.com",
    phoneNumber: "7999797979",
    password: "**********",
    passwordChangedAt: undefined,
    role: "INSTRUCTOR",
    biography: "Web Designer & Best-Selling Instructor",
    socialProfiles: undefined,
    profilePicture:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862571/lmsGenie%20assets/user/user2_cysjyo.jpg",
    slug: "shivani-kumari",
    rating: 5,
    totalStudents: 0,
    enrolledCourses: undefined,
    wishlist: undefined,
    isActive: true,
    isEmailVerified: true,
    loginCount: 100,
  },
  {
    id: "1",
    firstName: "Rahul",
    lastName: "Awasthi",
    email: "rahul@gmail.com",
    phoneNumber: "7999797979",
    password: "**********",
    passwordChangedAt: undefined,
    role: "INSTRUCTOR",
    biography: "Web Designer & Best-Selling Instructor",
    socialProfiles: undefined,
    profilePicture:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862570/lmsGenie%20assets/user/user3_qhjpmu.jpg",
    slug: "rahul-awasthi",
    rating: 5,
    totalStudents: 0,
    enrolledCourses: undefined,
    wishlist: undefined,
    isActive: true,
    isEmailVerified: true,
    loginCount: 100,
  },
  {
    id: "1",
    firstName: "Jitendra",
    lastName: "Thakur",
    email: "jitu@gmail.com",
    phoneNumber: "7999797979",
    password: "**********",
    passwordChangedAt: undefined,
    role: "INSTRUCTOR",
    biography: "Web Designer & Best-Selling Instructor",
    socialProfiles: undefined,
    profilePicture:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862570/lmsGenie%20assets/user/user3_qhjpmu.jpg",
    slug: "jitendra-thakur",
    rating: 5,
    totalStudents: 0,
    enrolledCourses: undefined,
    wishlist: undefined,
    isActive: true,
    isEmailVerified: true,
    loginCount: 100,
  },
];

export const courses: ICoursePartial[] = [
  {
    id: "1",
    category: ["FINANCE AND ACCOUNTING"],
    thumbnail:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862207/lmsGenie%20assets/course/course6_tclpvl.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "The Complete Personal Finance Course: Save, Protect, Make More",
    instructors: [
      {
        id: "1",
        firstName: "Vako",
        lastName: "Shvili",
        email: "vakoshvili@gmail.com",
        phoneNumber: "7999797979",
        password: "**********",
        passwordChangedAt: undefined,
        role: "INSTRUCTOR",
        biography: "Web Designer & Best-Selling Instructor",
        socialProfiles: undefined,
        profilePicture:
          "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
        slug: "vako-shvili",
        rating: 5,
        totalStudents: 0,
        enrolledCourses: undefined,
        wishlist: undefined,
        isActive: true,
        isEmailVerified: true,
        loginCount: 100,
      },
    ],
  },
  {
    id: "2",
    category: ["LIFE STYLE"],
    thumbnail:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862205/lmsGenie%20assets/course/course1_p9jghe.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Transformation Life Coach Certification (Accredited)",
    instructors: [
      {
        id: "1",
        firstName: "Vako",
        lastName: "Shvili",
        email: "vakoshvili@gmail.com",
        phoneNumber: "7999797979",
        password: "**********",
        passwordChangedAt: undefined,
        role: "INSTRUCTOR",
        biography: "Web Designer & Best-Selling Instructor",
        socialProfiles: undefined,
        profilePicture:
          "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
        slug: "vako-shvili",
        rating: 5,
        totalStudents: 0,
        enrolledCourses: undefined,
        wishlist: undefined,
        isActive: true,
        isEmailVerified: true,
        loginCount: 100,
      },
    ],
  },
  {
    id: "3",
    category: ["BUSINESS"],
    thumbnail:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862198/lmsGenie%20assets/course/course4_zzetiz.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title:
      "Learn Python Programming Masterclass dehudheudheuhdeudhdddddddddddddddddddddddd dehudheudheuhdeudhdddddddddddddddddddddddd dehudheudheuhdeudhdddddddddddddddddddddddd",
    instructors: [
      {
        id: "1",
        firstName: "Vako",
        lastName: "Shvili",
        email: "vakoshvili@gmail.com",
        phoneNumber: "7999797979",
        password: "**********",
        passwordChangedAt: undefined,
        role: "INSTRUCTOR",
        biography: "Web Designer & Best-Selling Instructor",
        socialProfiles: undefined,
        profilePicture:
          "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
        slug: "vako-shvili",
        rating: 5,
        totalStudents: 0,
        enrolledCourses: undefined,
        wishlist: undefined,
        isActive: true,
        isEmailVerified: true,
        loginCount: 100,
      },
    ],
  },
  {
    id: "4",
    category: ["BUSINESS"],
    thumbnail:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862197/lmsGenie%20assets/course/course2_zh4bxx.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Business Model Innovation: Differentiate & Grow Your Company",
    instructors: [
      {
        id: "1",
        firstName: "Vako",
        lastName: "Shvili",
        email: "vakoshvili@gmail.com",
        phoneNumber: "7999797979",
        password: "**********",
        passwordChangedAt: undefined,
        role: "INSTRUCTOR",
        biography: "Web Designer & Best-Selling Instructor",
        socialProfiles: undefined,
        profilePicture:
          "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
        slug: "vako-shvili",
        rating: 5,
        totalStudents: 0,
        enrolledCourses: undefined,
        wishlist: undefined,
        isActive: true,
        isEmailVerified: true,
        loginCount: 100,
      },
    ],
  },
  {
    id: "5",
    category: ["MUSIC"],
    thumbnail:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862197/lmsGenie%20assets/course/course10_dwwbdy.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Pianoforall - Incredible New Way To Learn Piano & Keyboard",
    instructors: [
      {
        id: "1",
        firstName: "Vako",
        lastName: "Shvili",
        email: "vakoshvili@gmail.com",
        phoneNumber: "7999797979",
        password: "**********",
        passwordChangedAt: undefined,
        role: "INSTRUCTOR",
        biography: "Web Designer & Best-Selling Instructor",
        socialProfiles: undefined,
        profilePicture:
          "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
        slug: "vako-shvili",
        rating: 5,
        totalStudents: 0,
        enrolledCourses: undefined,
        wishlist: undefined,
        isActive: true,
        isEmailVerified: true,
        loginCount: 100,
      },
    ],
  },
  {
    id: "6",
    category: ["BUSINESS"],
    thumbnail:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862197/lmsGenie%20assets/course/course8_usweyy.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Business Model Innovation: Differentiate & Grow Your Company",
    instructors: [
      {
        id: "1",
        firstName: "Vako",
        lastName: "Shvili",
        email: "vakoshvili@gmail.com",
        phoneNumber: "7999797979",
        password: "**********",
        passwordChangedAt: undefined,
        role: "INSTRUCTOR",
        biography: "Web Designer & Best-Selling Instructor",
        socialProfiles: undefined,
        profilePicture:
          "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
        slug: "vako-shvili",
        rating: 5,
        totalStudents: 0,
        enrolledCourses: undefined,
        wishlist: undefined,
        isActive: true,
        isEmailVerified: true,
        loginCount: 100,
      },
    ],
  },
  {
    id: "7",
    category: ["MUSIC"],
    thumbnail:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862194/lmsGenie%20assets/course/course9_o73qqh.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Pianoforall - Incredible New Way To Learn Piano & Keyboard",
    instructors: [
      {
        id: "1",
        firstName: "Vako",
        lastName: "Shvili",
        email: "vakoshvili@gmail.com",
        phoneNumber: "7999797979",
        password: "**********",
        passwordChangedAt: undefined,
        role: "INSTRUCTOR",
        biography: "Web Designer & Best-Selling Instructor",
        socialProfiles: undefined,
        profilePicture:
          "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
        slug: "vako-shvili",
        rating: 5,
        totalStudents: 0,
        enrolledCourses: undefined,
        wishlist: undefined,
        isActive: true,
        isEmailVerified: true,
        loginCount: 100,
      },
    ],
  },
  {
    id: "8",
    category: ["IT & SOFTWARE"],
    thumbnail:
      "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862193/lmsGenie%20assets/course/course3_ywumwu.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title:
      "Learn Python Programming Masterclass dehudheudheuhdeudhdddddddddddddddddddddddd dehudheudheuhdeudhdddddddddddddddddddddddd dehudheudheuhdeudhdddddddddddddddddddddddd",
    instructors: [
      {
        id: "1",
        firstName: "Vako",
        lastName: "Shvili",
        email: "vakoshvili@gmail.com",
        phoneNumber: "7999797979",
        password: "**********",
        passwordChangedAt: undefined,
        role: "INSTRUCTOR",
        biography: "Web Designer & Best-Selling Instructor",
        socialProfiles: undefined,
        profilePicture:
          "https://res.cloudinary.com/lmsgenie-storage/image/upload/v1694862573/lmsGenie%20assets/user/user1_lvbj0z.jpg",
        slug: "vako-shvili",
        rating: 5,
        totalStudents: 0,
        enrolledCourses: undefined,
        wishlist: undefined,
        isActive: true,
        isEmailVerified: true,
        loginCount: 100,
      },
    ],
  },
];

export const faqs = [
  {
    id: "1",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "2",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "3",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "4",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "5",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "6",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "7",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "8",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "9",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "10",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "11",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "12",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "13",
    question: "What is the best way to learn?",
    answer: "The best way to learn is to practice and practice.",
  },
  {
    id: "14",
    question: "What is the best way to learn?",
  },
];
