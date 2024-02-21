import { VideoEssay as TVideoEssay } from "../api/videoEssay/VideoEssay";

export const VIDEOESSAY_TITLE_FIELD = "url";

export const VideoEssayTitle = (record: TVideoEssay): string => {
  return record.url?.toString() || String(record.id);
};
