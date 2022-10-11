import React from 'react';
import { ProgressBar } from 'react-bootstrap';

export default function ProfessionalSkill() {
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div className='progresses' >
            <label>HTML</label>
            <ProgressBar animated now={75} />
            <label>CSS & Bootstrap & MUI</label>
            <ProgressBar animated now={65} />
            <label>JavaScript</label>
            <ProgressBar animated now={70} />
        </div>
        <div className='progresses2'>
            <label>DevOps</label>
            <ProgressBar animated now={20} />
            <label>ReactJs</label>
            <ProgressBar animated now={75} />
            <label>GitHub</label>
            <ProgressBar animated now={65} />
        </div>
    </div>
    </div>
  )
  }