type TProjectInfo = {
  role: string;
  status: string;
  startDate: string;
  endDate: string;
};

const ProjectInfo = ({ role, status, startDate, endDate }: TProjectInfo) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-white mb-3">프로젝트 정보</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-400">
        <div>
          <p>
            <span className="font-semibold">역할:</span> {role}
          </p>
          <p>
            <span className="font-semibold">상태:</span>{" "}
            {status == "completed" ? "완료" : "진행 중"}
          </p>
        </div>
        <div>
          <p>
            <span className="font-semibold">시작일:</span>{" "}
            {new Date(startDate).toLocaleDateString()}
          </p>
          <p>
            <span className="font-semibold">종료일:</span>{" "}
            {new Date(endDate).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
