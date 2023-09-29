import { MhciPrereqsConversationComment as TMhciPrereqsConversationComment } from "../api/mhciPrereqsConversationComment/MhciPrereqsConversationComment";

export const MHCIPREREQSCONVERSATIONCOMMENT_TITLE_FIELD = "comment";

export const MhciPrereqsConversationCommentTitle = (
  record: TMhciPrereqsConversationComment
): string => {
  return record.comment?.toString() || String(record.id);
};
