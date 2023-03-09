import React from "react";
import { useSelector } from "react-redux";
import RecordList from "../components/RecordList";

export const SearchResult = () => {
  const records = useSelector((state) => state.record.records);
  return (
    <div style={{ marginTop: "5rem" }}>
      <RecordList records={records} isSearch={true} />
    </div>
  );
};
