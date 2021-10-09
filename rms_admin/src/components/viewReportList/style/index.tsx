import styled from 'styled-components';
import { color } from '../../../style';

export const ViewReportList = styled.div`
  width: 100%;
  min-width: 800px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const ReportListWrapper = styled.div`
  margin-top: 55px;
`;

export const TitleFont = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const ReportListContainer = styled.div`
  width: 525px;
  margin-top: 15px;
`;

export const ReportContainer = styled.div`
  width: 100%;
  height: 120px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background-color: white;
  margin-bottom: 6px;
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1));
  cursor: pointer;
`;

export const ReportContents = styled.div`
  margin: 12px 0px 0px 37px;
  display: flex;
  flex-direction: column;
`;

export const ProjectDivision = styled.span`
  font-size: 10px;
  margin-bottom: 5px;
`;

export const Writer = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

export const MajorFieldWrapper = styled.div`
  margin-top: 10px;
`;

export const MajorField = styled.span`
  font-size: 10px;
  padding: 0px 10px;
  color: ${color.main};
  border: 1px solid #386bee;
  border-radius: 15px;
  margin-right: 5px;
`;

export const PageNationWrapper = styled.ul`
  width: 235px;
  height: 20px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageNationButton = styled.li`
  font-size: 14px;
  cursor: pointer;
`;
