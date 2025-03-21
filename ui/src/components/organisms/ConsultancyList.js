import React from 'react';
import ConsultancyCard from '../molecules/ConsultancyCard';

const ConsultancyList = ({ title, items, role, handleConfirmSuggested, handleConfirmAskedFor, handleReject }) => {

  return (
    <div style={{ margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: "left" }}>{title}</h2>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '30px' }}>
        {items.map((item, index) => {
          const ifSuggested = item.status === 'SUGGESTED';
          const ifProvider = role === 'PROVIDER' & item.status === 'PENDING';
          return (
            <ConsultancyCard
              key={index}
              id={item._id}
              title={item.consultancy_provider.name}
              description={item.reason_of_match}
              role={role}
              status={item.status}
              email={role === 'RECEIVER' ? item.consultancy_provider.contact : item.consultancy_receiver.contact}
              handleConfirm={
                ifSuggested ? handleConfirmSuggested : ifProvider ? handleConfirmAskedFor : null
              }
              handleReject={handleReject}
          />
        )
        }
      )}
      </div>
    </div>
  );
};

export default ConsultancyList;
