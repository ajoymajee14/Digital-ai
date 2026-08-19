export type UserRole = 'student' | 'instructor' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar: string;
  subscription: 'free' | 'pro' | 'annual';
  subscriptionStatus: 'active' | 'cancelled' | 'trial';
  joinedDate: string;
  learningHours: number;
  completedCoursesCount: number;
  certificatesCount: number;
}

export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  expertise: string[];
  coursesCount: number;
  rating: number;
  studentsCount: number;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoUrl: string;
  isCompleted?: boolean;
  isPreview?: boolean;
  description?: string;
  resources?: { name: string; type: string; url: string }[];
}

export interface CourseModule {
  id: string;
  title: string;
  duration: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  duration: string;
  thumbnail: string;
  instructor: Instructor;
  modules: CourseModule[];
  isSubscriptionIncluded: boolean;
  tags: string[];
  updatedAt: string;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: string;
  progressPercentage: number;
  completedLessonIds: string[];
  lastAccessedLessonId?: string;
}

export interface Certificate {
  id: string;
  userId: string;
  userName: string;
  courseId: string;
  courseName: string;
  instructorName: string;
  issuedAt: string;
  certificateId: string;
  qrCodeUrl: string;
}

export interface Coupon {
  id: string;
  code: string;
  discountPercentage: number;
  fixedDiscount: number;
  expiryDate: string;
  maxUses: number;
  usedCount: number;
  isActive: boolean;
}

export interface PaymentTransaction {
  id: string;
  userId: string;
  userName: string;
  itemTitle: string;
  amount: number;
  currency: string;
  method: 'UPI' | 'Card' | 'Net Banking' | 'Wallet';
  status: 'success' | 'failed' | 'refunded';
  date: string;
  invoiceId: string;
}

export interface NotificationTemplate {
  id: string;
  type: 'email' | 'sms' | 'whatsapp';
  trigger: string;
  subject: string;
  content: string;
  isActive: boolean;
}
