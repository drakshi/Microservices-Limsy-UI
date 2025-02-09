import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LibrarianSidebar from '../../components/librarian/LibrarianSidebar'
import BooksTotal from '../../components/book/BooksTotal'
import IssuedBookTotal from '../../components/issuedBook/IssuedBookTotal'
import LibrarianPersonalDetails from '../../components/librarian/LibrarianPersonalDetails'
import StudentTotal from '../../components/student/StudentTotal'
import LibrarianUpdate from '../../components/librarian/LibrarianUpdate'

const LibrarianRouter = () => {
    return (
        <div className='flex'>
            <div className='w-[30%]'>
                <LibrarianSidebar />
            </div>
            <div className='w-[90%]'>
                <Routes>
                    <Route path='/personal-details' element={<LibrarianPersonalDetails />} />
                    <Route path='/total-students' element={<StudentTotal />} />
                    <Route path='/total-students-auth' element={<StudentTotal />} />
                    <Route path='/total-books' element={<BooksTotal />} />
                    <Route path='/total-books-issued' element={<BooksTotal />} />
                    <Route path='/total-students-book-issued' element={<IssuedBookTotal />} />
                    <Route path='/update' element={<LibrarianUpdate />} />
                </Routes>
            </div>
        </div>
    )
}

export default LibrarianRouter