import { Application } from "../application/Application";

export type MseCodility = {
  academicDegree: string | null;
  application?: Application;
  closeDate: string | null;
  createDate: string;
  email: string;
  fieldOfStudy: string | null;
  id: number;
  ips: string;
  lastName: string;
  lastSchoolAttended: string | null;
  maxScore: string;
  nick: string;
  percentCorrectness: string;
  percentPerformance: string;
  percentTotalScore: string;
  phone: string | null;
  profileUrl: string | null;
  programmingExperience: string | null;
  similarityCheck: string | null;
  startDate: string | null;
  task1Correctness: string;
  task1Name: string;
  task1Performance: string;
  task1Score: string;
  task2Correctness: string;
  task2Name: string;
  task2Performance: string;
  task2Score: string;
  task3Correctness: string;
  task3Name: string;
  task3Performance: string;
  task3Score: string;
  task4Correctness: string;
  task4Name: string;
  task4Performance: string;
  task4Score: string;
  test: string;
  testSessionId: string;
  timeUsed: string;
  totalScore: string;
};
