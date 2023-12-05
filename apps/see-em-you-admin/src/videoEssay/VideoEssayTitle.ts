import { VideoEssay as TVideoEssay } from "../api/videoEssay/VideoEssay";

export const VIDEOESSAY_TITLE_FIELD = "accessCode";

export const VideoEssayTitle = (record: TVideoEssay): string => {
  return record.accessCode?.toString() || String(record.id);
};
