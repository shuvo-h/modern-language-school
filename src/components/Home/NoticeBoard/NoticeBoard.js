import React from 'react';
import { Link } from 'react-router-dom';
import { FcNews } from "react-icons/fc";


const NoticeBoard = () => {
    return (
        <div className="col-md-4 ps-5 shadow">
            <h2 className="text-center text-info my-4"><u>Notice Board</u></h2>
            <p><Link className="text-decoration-none" to="/cultural-ceremony"><FcNews/> Cultural ceremony -2021</Link></p>
            <p><Link className="text-decoration-none" to="/duration-reduce"><FcNews/> Course duration reduce due to Covid-19</Link></p>
            <p><Link className="text-decoration-none" to="/board-meeting"><FcNews/> Board meeting notice</Link></p>
            <p><Link className="text-decoration-none" to="/result"><FcNews/> Result published (Kid's English-2020)</Link></p>
            <p><Link className="text-decoration-none" to="/exam-schedule"><FcNews/> Exam schedule for Deutsch Writing(Batch-14)</Link></p>
            <p><Link className="text-decoration-none" to="/religious vacation"><FcNews/> Religious Vacation (Durga Puja) announced</Link></p>
            <p><Link className="text-decoration-none" to="/job-circular"><FcNews/> Job circular has published for lecture post </Link></p>
        </div>
    );
};

export default NoticeBoard;