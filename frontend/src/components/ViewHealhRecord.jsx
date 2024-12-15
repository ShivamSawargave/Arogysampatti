import React from 'react'
import NavContact from './NavContact'
import Navbar from './Navbar'
import Footer from './Footer'


function ViewHealhRecord() {
    return (
        <>
            <NavContact />
            <Navbar />
            <div className='md:mt-28 pt-20 md:m-24 m-4 bg-slate-100 shadow-2xl'>
                <div className='md:pl-20 pl-2 text-4xl text-blue-300'>How to get It</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4'>If you want to get your health record, it helps to understand how the process works. That way, you’ll know what to do if you hit a roadblock.</div>
                <div className='md:pl-20 pl-2 font-bold text-xl mt-4'>This guide won’t provide you with your health record but instead will teach you how to request it from your health care provider.</div>
                <div className='md:pl-20 pl-2 text-4xl text-blue-300 mt-4'>How do I get started?</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4'>The first step is to check your health care provider’s online patient portal, if they have one. A patient portal is a secure website, where patients can often do things like make appointments, contact their provider, and look at lab results. Some of your health information, like a list of the immunizations you’ve had, may be available through the patient portal.</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4'>If the health information you need is not available through the patient portal or your provider does not have an online patient portal, try other ways to ask your provider for your records:</div>
                <div className='md:pl-20 pl-2 font-bold text-xl mt-4'>>Check their website:</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4'>Information about how to get your health record may be found under the Contact Us section of a provider’s website. It may direct you to an online portal, a phone number, an email address, or a form.</div>
                <div className='md:pl-20 pl-2 font-bold text-xl mt-4'>>Phone or visit:</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4 pb-4'>You can also call or visit your provider and ask them how to get your health record. Ask for the health information services department or the administrative staff in charge of releasing health records.</div>
            </div>
            <div className='md:mt-12 pt-6 md:m-24 m-4 bg-slate-100 shadow-2xl'>
                <div className='md:pl-20 pl-2 text-2xl underline text-blue-400'>FREQUENTLY ASKED QUESTION</div>
                <div className='md:pl-20 pl-2 font-bold text-xl mt-6'>I make health care decisions for my child, a family member, or another adult — can I access their health record?</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4 pb-4'>Generally, yes, and the process is basically the same as getting your own record. If the law says you can make health care-related decisions for another individual, you usually have the right to access their record. You could be authorized under state, military, or tribal law, or by the individual, or a court, to make health care decisions for this person. For example, you may have a medical power of attorney or authority as a health care proxy. Under the INDIAN Privacy Rule, such a person who can legally make health care decisions for someone else is called a personal representative.</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4 pb-4'>There may be some situations where, based on state or other law, an individual’s personal representative is not able to get copies of all or part of the individual’s records. For example, generally parents or guardians are the personal representatives for their children until the children turn 18. But some states treat teenagers under 18 as adults, and some states do not allow parents or guardians to have certain health care information about their teenage children, so they may only be able to see or get copies of parts of the records for their children. If you are refused records, ask your provider for the reason.</div>
            </div>
            <div className='md:mt-12 pt-6 md:m-24 m-4'>
                <div className='md:pl-20 pl-2 text-4xl text-green-950'>How do I ask for my health record?</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4 '>How you make your request will depend on your provider’s processes.</div>
            </div>
            <div className='md:mt-12 pt-6 md:m-24 m-4 bg-slate-100 shadow-2xl'>
                <div className='md:pl-20 pl-2 text-2xl underline text-blue-400'>FREQUENTLY ASKED QUESTION</div>
                <div className='md:pl-20 pl-2 font-bold text-xl mt-6'>Can my health care provider’s office refuse to give me my health record because I have an unpaid bill?</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4 pb-4'>No. According to federal law, your provider must give you access to your health record, even if you have an unpaid bill.</div>
            </div>
            <div className='md:mt-12 pt-6 md:m-24 m-4'>
                <div className='md:pl-20 pl-2 text-4xl text-green-950'>Do I have to pay a fee to get my health record?</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4 '>You may have to pay a fee. Getting your records electronically, through a patient portal, health app, or by email, likely will be free. However, according to your HIPAA Privacy Rule access rights, your provider may charge a reasonable fee to cover only the cost of:</div>
                <div className='md:pl-24 pl-4 text-slate-700 text-xl mt-4 '>1. Making a paper copy or electronic copy, and any electronic media if used — like a CD or USB (thumb) drive — of your health record</div>
                <div className='md:pl-24 pl-4 text-slate-700 text-xl mt-4 '>2. Mailing you a paper or electronic media copy of your health record</div>
                <div className='md:pl-20 pl-2 text-slate-700 text-xl mt-4 pb-4'>When you send in the request for your health record, ask your provider how much it will cost to get your record. If you need more than one copy, ask your provider how much each copy will cost and decide whether you will make the copy yourself or ask your provider to do it for you.</div>
            </div>
            <Footer/>
        </>
    )
}

export default ViewHealhRecord
