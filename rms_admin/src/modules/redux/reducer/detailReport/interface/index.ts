import { error } from '../../../../../models/error';

interface DetailReportState {
  content: string;
  videoUrl: string;
  writer: string;
  id: string;
  projectName: string;
  error: error | null;
}

export default DetailReportState;
