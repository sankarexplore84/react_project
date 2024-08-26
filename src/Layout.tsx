import React from 'react';
import './Layout.css'; // Importing the CSS file

const Layout: React.FC = () => {
  const singleRecord = {
    id: 1,
    name: "Sample Record",
    description: "This record contains 24 fields and values.",
    createdAt: "2024-08-26T12:00:00Z",
    field1: "Value 1",
    field2: "Value 2",
    field3: "Value 3",
    field4: "Value 4",
    field5: "Value 5",
    field6: "Value 6",
    field7: "Value 7",
    field8: "Value 8",
    field9: "Value 9",
    field10: "Value 10",
    field11: "Value 11",
    field12: "Value 12",
    field13: "Value 13",
    field14: "Value 14",
    field15: "Value 15",
    field16: "Value 16",
    field17: "Value 17",
    field18: "Value 18",
    field19: "Value 19",
    field20: "Value 20",
    field21: "Value 21",
    field22: "Value 22",
    field23: "Value 23",
    field24: "Value 24"
  };

  const fields = Object.entries(singleRecord).filter(([key]) => key !== 'id' && key !== 'name' && key !== 'description' && key !== 'createdAt');

  const column1Fields = fields.slice(0, 12); // First 12 fields for the first column
  const column2Fields = fields.slice(12);    // Remaining 12 fields for the second column

  return (
    <div className="layout-container">
        <div className="main-header">
            <div className="header">
                <h1 className="main-title">Single Call Review</h1>
                <h2 className="sub-title">Audit ID: 077936813358</h2>
            </div>
        </div>
      <div className="main-content">
        <div className="column column-1">
          <h3>Transcript</h3>
          <p>Some content here</p>
        </div>
        <div className="column column-2">
          <h3>Metadata</h3>
          <div className="metadata-container">
            <div className="metadata-column">
              {column1Fields.map(([key, value]) => (
                <div key={key} className="metadata-field">
                  <label className="metadata-label">{key}</label>
                  <div className="metadata-value">{value}</div>
                </div>
              ))}
            </div>
            <div className="metadata-column">
              {column2Fields.map(([key, value]) => (
                <div key={key} className="metadata-field">
                  <label className="metadata-label">{key}</label>
                  <div className="metadata-value">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-column">
        <h3>Content Summary</h3>
        <p>More content here</p>
      </div>
    </div>
  );
};

export default Layout;
