import { error } from '../../../../../models/error';

interface DetailReportState {
  content: string;
  writer: string;
  id: string;
  projectName: string;
  writerStdNumber: number | null;
  error: error | null;
  isIndividual: boolean;
}

export default DetailReportState;
