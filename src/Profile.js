

/////////////NOTES////////////////////
//SEPERATE CARDS (MAIN CARD WITH IMG, NAME, CITY), (ABOUT), (WORK)/(RESUME)
//CURRENT CARD IS TOO WIDE, LOOK AT LINKEDIN - ITS MUCH MORE NARROW
//SHOULD EMTPY SPACES ON BOTH SIDE OF THE CARD BE UTILIZED? FINE EXAMPLE OF SITES WITH BLANK SPACES
//NEED AN ADIT PROFILE BUTTON
//NEED LOGIN/REGISTER LINKS TO DISPPEAR WHE NLOGGED IN
//project cards need to be smaller, with lickable links
//project area needs to be empty with option to upload project thumbnail with clickable link
//- nearly done! need seperate profile page for jsut viewing. the current one is for the logged in user 
//related profiles at bottom of page in sperate card

import "./Profile.css";

import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import Nav from 'react-bootstrap/Nav';
import { MDBModal, MDBModalBody, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle } from 'mdb-react-ui-kit';

////////// SOCIAL MEDIA ICON UPLOADS /////////////
import tiktok from '../src/images/tiktok.png';
import youtube from '../src/images/youtube.png';
import twitter from '../src/images/twitter.png';
import facebook from '../src/images/facebook.png';
import instagram from '../src/images/instagram.png';
import portfoliowebsite from '../src/images/portfoliowebsite.png';

////////// SKILLS & LANGUAGES ICON UPLOADS/////////////
import  anaconda  from '../src/images/skills & languages/anaconda.png';
import  androidstudio  from '../src/images/skills & languages/androidstudio.png';
import  angularjs  from '../src/images/skills & languages/angularjs.png';
import  ansible  from '../src/images/skills & languages/ansible.png';
import  apollo  from '../src/images/skills & languages/apollo.png';
import  balenaetcher  from '../src/images/skills & languages/balenaetcher.png';
import  c  from '../src/images/skills & languages/c.png';
import  cplusplus  from '../src/images/skills & languages/cplusplus.png';
import  clouddevelopment  from '../src/images/skills & languages/clouddevelopment.png';
import  codeblocks  from '../src/images/skills & languages/codeblocks.png';
import  csharp  from '../src/images/skills & languages/csharp.png';
import  css3  from '../src/images/skills & languages/css3.png';
import  drupal  from '../src/images/skills & languages/drupal.png';
import  fedora  from '../src/images/skills & languages/fedora.png';
import  flask  from '../src/images/skills & languages/flask.png';
import  flutter  from '../src/images/skills & languages/flutter.png';
import  forrst  from '../src/images/skills & languages/forrst.png';
import  gatsbyjs  from '../src/images/skills & languages/gatsbyjs.png';
import  graphql  from '../src/images/skills & languages/graphql.png';
import  html5  from '../src/images/skills & languages/html5.png';
import  icue  from '../src/images/skills & languages/icue.png';
import  intellijidea  from '../src/images/skills & languages/intellijidea.png';
import  javascript  from '../src/images/skills & languages/javascript.png';
import  jupyter  from '../src/images/skills & languages/jupyter.png';
import  linuxserver  from '../src/images/skills & languages/linuxserver.png';
import  mariadb  from '../src/images/skills & languages/mariadb.png';
import  microsoftvisio2019  from '../src/images/skills & languages/microsoftvisio2019.png';
import  opencv  from '../src/images/skills & languages/opencv.png';
import  php  from '../src/images/skills & languages/php.png';
import  prometheus  from '../src/images/skills & languages/prometheus.png';
import  pullrequest  from '../src/images/skills & languages/pullrequest.png';
import  rproject  from '../src/images/skills & languages/rproject.png';
import  ruby  from '../src/images/skills & languages/ruby.png';
import  sourcecode  from '../src/images/skills & languages/sourcecode.png';
import  spyder  from '../src/images/skills & languages/spyder.png';
import  spyderide5  from '../src/images/skills & languages/spyderide5.png';
import  swift  from '../src/images/skills & languages/swift.png';
import  swiftui  from '../src/images/skills & languages/swiftui.png';
import  terraform  from '../src/images/skills & languages/terraform.png';
import  typescript  from '../src/images/skills & languages/typescript.png';
import  undp  from '../src/images/skills & languages/undp.png';
import  visualstudio  from '../src/images/skills & languages/visualstudio.png';
import sourcetree from '../src/images/skills & languages/sourcetree.png';



const { sessionStorage } = window;

function Profile(props) {
  const [city, setCity] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [project1, setproject1] = useState("");
  const [project2, setproject2] = useState("");
  const [project3, setproject3] = useState("");
  const [project4, setproject4] = useState("");
  const [project5, setproject5] = useState("");

  const [videoFile, setvideoFile] = useState("");

  const [currentposition, setCurrentPosition] = useState("");
const [currentemployer, setCurrentEmployer] = useState("");



  const [country, setCountry] = useState("");
    const [stateprovince, setStateProvince] = useState("");


  const navigate = useNavigate();



  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");

    Axios.get(`http://localhost:3009/profile/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },

    })
      .then((response) => {
        console.log(response.data);
        setCity(response.data.city);
        setFirstName(response.data.firstname);
        setLastName(response.data.lastname);
        setSummary(response.data.summary);
        setImage(response.data.imageFile);
        setproject1(response.data.project1);
        setproject2(response.data.project2);
        setproject3(response.data.project3);
        setproject4(response.data.project4);
        setproject5(response.data.project5);

        setvideoFile(response.data.videoFile);

        setCountry(response.data.country);
        setStateProvince(response.data.stateprovince);
        // setEducationSchool(response.data.educationschool);
        // setEducationProgram(response.data.educationprogram);
        // setEducationYear(response.data.educationyear);
        // setBootCampName(response.data.bootcampname);
        // setBootCampProgram(response.data.bootcampprogram);
        // setBootCampYear(response.data.bootcampyear);

        setCurrentPosition(response.data.current_position);
        setCurrentEmployer(response.data.current_employer);
          

      })
    }, []); 
    // pass an empty array as the second argument to useEffect to run it only once on mount
  

    
    ///////////////////////  DEGREE / CERTIFICACTION 1  //////////////////////////////////////////
    const [cert1, setCert1] = useState("");
    const [degree1, setDegree1] = useState("");
    const [link1, setLink1] = useState("");

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
  
    Axios.get(`http://localhost:3009/cert1/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      console.log(response.data);
      setCert1(response.data.cert1); // Update the cert1 state with the received value
      setDegree1(response.data.certification1);
      setLink1(response.data.certification1link);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

///////////////////////  DEGREE / CERTIFICACTION 2  //////////////////////////////////////////
      const [cert2, setCert2] = useState("");
      const [degree2, setDegree2] = useState("");
      const [link2, setLink2] = useState("");

    useEffect(() => {
      const token = sessionStorage.getItem("token");
      const userId = sessionStorage.getItem("userId");
    
      Axios.get(`http://localhost:3009/cert2/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response.data);
        setCert2(response.data.cert2); // Update the cert1 state with the received value
        setDegree2(response.data.certification2);
        setLink2(response.data.certification2link);
      })
      .catch((error) => {
        console.log(error);
      });
    }, []);


  // Set up state to handle modal visibility
const [isModalOpen, setIsModalOpen] = useState(false);
const [isModalOpen1, setIsModalOpen1] = useState(false);
const [isModalOpen2, setIsModalOpen2] = useState(false);
const [isModalOpen3, setIsModalOpen3] = useState(false);
const [selectedImage, setSelectedImage] = useState('');

// Function to handle opening the modal and setting the selected image
const openModal = (image) => {
  setSelectedImage(image);
  setIsModalOpen(true);
};

// Function to handle closing the modal
const closeModal = () => {
  setIsModalOpen(false);
};


  // Function to handle opening the modal and setting the selected image
  const openModal1 = (image) => {
    setSelectedImage(image);
    setIsModalOpen1(true);
  };

  const openModal2 = (image) => {
    setSelectedImage(image);
    setIsModalOpen2(true);
  };
  
  // Function to handle closing the modal
  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

    // Function to handle opening the modal and setting the selected image
    const openModal3 = (image) => {
      setSelectedImage(image);
      setIsModalOpen3(true);
    };
    
    // Function to handle closing the modal
    const closeModal3 = () => {
      setIsModalOpen3(false);
    };


/////////////////////////    SKILLS .GET REQUEST  ///////////////////////////
    const [selectedValuesSkills, setselectedValuesSkills] = useState({ skills: [] });

    useEffect(() => {
      const token = sessionStorage.getItem('token');
      const userId = sessionStorage.getItem('userId');
  
      // Fetch the skills data and update the selectedValuesSkills
      Axios.get(`http://localhost:3009/skills/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          const skillsData = response.data;
          setselectedValuesSkills((prevselectedValuesSkills) => ({
            ...prevselectedValuesSkills,
            skills: skillsData,
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    const skillIcons = {
      anaconda :  anaconda ,
      androidstudio :  androidstudio ,
      angularjs :  angularjs ,
      ansible :  ansible ,
      apollo :  apollo ,
      balenaetcher :  balenaetcher ,
      c :  c ,
      clouddevelopment :  clouddevelopment ,
      codeblocks :  codeblocks ,
      'c++' :  cplusplus ,
      csharp :  csharp ,
      css3 :  css3 ,
      drupal :  drupal ,
      fedora :  fedora ,
      flask :  flask ,
      flutter :  flutter ,
      forrst :  forrst ,
      gatsbyjs :  gatsbyjs ,
      graphql :  graphql ,
      html5 :  html5 ,
      icue :  icue ,
      intellijidea :  intellijidea ,
      javascript :  javascript ,
      jupyter :  jupyter ,
      linuxserver :  linuxserver ,
      mariadb :  mariadb ,
      microsoftvisio2019 :  microsoftvisio2019 ,
      opencv :  opencv ,
      php :  php ,
      prometheus :  prometheus ,
      pullrequest :  pullrequest ,
      rproject :  rproject ,
      ruby :  ruby ,
      sourcecode :  sourcecode ,
      spyder :  spyder ,
      spyderide5 :  spyderide5 ,
      swift :  swift ,
      swiftui :  swiftui ,
      terraform :  terraform ,
      typescript :  typescript ,
      undp :  undp ,
      visualstudio :  visualstudio ,
      sourcetree: sourcetree
    };
  ///////////////////////////////////////// .GET PROFILE (SOCIAL MEDIA) /////////////////////////////////////////
  const [socialMediaEntries, setSocialMediaEntries] = useState([
    { media_type: '', text_value: '' },
    { media_type: '', text_value: '' },
    { media_type: '', text_value: '' },
    { media_type: 'PortfolioWebsite', text_value: '' },
  ]);



  const mediaTypeImages = {
    twitter: twitter,
    facebook: facebook,
    instagram: instagram,
    tiktok: tiktok,
    youtube: youtube,
    portfoliowebsite:portfoliowebsite
    
  };
  

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
  
    Axios.get(`http://localhost:3009/socialmedia/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => {
        const socialMediaData = response.data;
        // Process the social media data as needed
        // For example, you can set it to a state variable
        setSocialMediaEntries(socialMediaData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  



/////////////////////////    TESTING .GET REQUEST  ///////////////////////////
const [selectedValuesTests, setselectedValuesTests] = useState({testingAccepted: []});

useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

Axios.get(`http://localhost:3009/testing/${userId}`, {
  headers: { Authorization: `Bearer ${token}` },
})
  .then((response) => {
    const testingData = response.data;
    setselectedValuesTests((prevselectedValuesTests) => ({
      ...prevselectedValuesTests,
      testingAccepted: testingData,
    }));
  })
  .catch((error) => {
    console.log(error);
  });
}, []);

/////////////////////////    CURRENT POSITION + EMPLOYER .GET REQUEST  ///////////////////////////


// useEffect(() => {
//   const token = sessionStorage.getItem("token");
//   const userId = sessionStorage.getItem("userId");

//   Axios.get(`http://localhost:3009/education/${userId}`, {
//     headers: { Authorization: `Bearer ${token}` },

//   })
//     .then((response) => {
//       console.log(response.data);
 
//       setSchoolName(response.data.schoolname);
//       setSchoolYear(response.data.schoolyear);
//       setSchoolProgram(response.data.schoolprogram);

//     })
//   }, []);


/////////////////////////    EDUCATION .GET REQUEST  ///////////////////////////
const [schoolname, setSchoolName] = useState("");
const [schoolyear, setSchoolYear] = useState("");
const [schoolprogram, setSchoolProgram] = useState("");


useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/education/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },

  })
    .then((response) => {
      console.log(response.data);
 
      setSchoolName(response.data.schoolname);
      setSchoolYear(response.data.schoolyear);
      setSchoolProgram(response.data.schoolprogram);

    })
  }, []);

/////////////////////////    BOOTCAMP .GET REQUEST  ///////////////////////////
const [bootcampname, setBootCampName] = useState("");
const [bootcampprogram, setBootCampProgram] = useState("");
  const [bootcampyear, setBootCampYear] = useState("");


useEffect(() => {
  const token = sessionStorage.getItem("token");
  const userId = sessionStorage.getItem("userId");

  Axios.get(`http://localhost:3009/bootcamp/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },

  })
    .then((response) => {
      console.log(response.data);
 
      setBootCampName(response.data.bootcampname);
      setBootCampProgram(response.data.bootcampprogram);
      setBootCampYear(response.data.bootcampyear);

    })
  }, []);



  


const truncatedSummary = summary.length > 500 ? `${summary.substring(0, 500)}...` : summary;




  return (


<div>
  
<MDBContainer classname="banner" style={{marginTop:'20px',marginBottom:'', height:'40px', width: '100%', display:'flex', justifyContent:'space-between' }}>
<Nav.Link href="/EditVideo" className="editProfileButton" style={{alignSelf:'center'}}>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="darkblue" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</Nav.Link>
<Nav.Link href="/EditProfile" className="editProfileButton" style={{alignSelf:'center'}}>  
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</Nav.Link>
<Nav.Link href="/UploadProjects" className="editProfileButton" style={{alignSelf:'center'}}>  
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-pencil-fill" viewBox="0 0 16 16">
  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
</svg>
</Nav.Link>
</MDBContainer>



    <div className="gradient-custom-2 py-4" style={{ borderBottom: '1px solid lightgrey', backgroundColor: 'white', display:'flex', justifyContent: 'space-between'}}>

    <div className="porfoliioProjects">
 <MDBContainer className="py-1 h-100" style={{}}>
   <MDBCol className="mb-8" style={{ width: '600px', minHeight: '400px'}}>

   <MDBRow>
   <MDBCol className="mb-2" style={{ minWidth: '100%' }}>
          <div
            className="mt-1 mb-1 img-thumbnail"
            style={{ position: 'relative', width: '600px', height: '400px' }}
            onMouseEnter={() => {
              const videoElement = document.getElementById('videoElement');
              if (videoElement) {
                videoElement.style.display = 'block';
                videoElement.play();
              }
            }}
            onMouseLeave={() => {
              const videoElement = document.getElementById('videoElement');
              if (videoElement) {
                videoElement.style.display = 'none';
                videoElement.pause();
              }
            }}
          >
            <video
              id="videoElement"
              src={`http://localhost:3009/${videoFile}`}
              alt="Project1"
              style={{ display: 'none', width: '100%', height: '100%', objectFit: 'cover' }}
              loop
              muted>
            </video>

              <img
                className="profileImage"
                src={`http://localhost:3009/${image}`}
                alt="Project1"
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = 0;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = 1;
                }}
              />
          </div>
        </MDBCol>




        <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${cert1}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', height:'220px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal1(cert1)}
  />
</MDBCol>

<MDBModal tabIndex="-1" show={isModalOpen1} onHide={closeModal1}>
  <MDBModalDialog className="modal-dialog-centered">
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>{degree1} - {link1}</MDBModalTitle>
        <button type="button" className="btn-close" onClick={closeModal1}></button>
      </MDBModalHeader>
      <MDBModalBody>
        <img
          src={`http://localhost:3009/${selectedImage}`}
          alt="Selected Project1"
          className="img-fluid"
        />
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>





<MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${cert2}`}
    alt="Project2"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', height:'220px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal2(cert2)}
  />
</MDBCol>
     
<MDBModal tabIndex="-1" show={isModalOpen2} onHide={closeModal2}>
  <MDBModalDialog className="modal-dialog-centered">
    <MDBModalContent>
      <MDBModalHeader>
       <MDBModalTitle>{degree2} - {link2}</MDBModalTitle>
        <button type="button" className="btn-close" onClick={closeModal2}></button>
      </MDBModalHeader>
      <MDBModalBody>
        <img
          src={`http://localhost:3009/${selectedImage}`}
          alt="Selected Project2"
          className="img-fluid"
        />
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>


             
           </MDBRow>
           

           </MDBCol>

 </MDBContainer>
 </div>



<div className="portfolioProjects2" style={{ height: '620px', overflowX: 'hidden' }}>
  <MDBContainer className="py-0" style={{ backgroundColor: 'transparent' }}>
    <MDBCol className="mb-0" style={{ width: '600px', minHeight: '200px', overflow: 'auto', overflowX: 'hidden' }}>
      <MDBRow style={{ display: 'block' }}>


      <MDBCard style={{background: "white", margin: "20px", border: '1px lightgrey solid', maxWidth:"580px"}}>
  <MDBCardBody>

<div style={{ fontWeight: 'bolder' }}>
  {firstName} {lastName}
  {currentposition && currentemployer ? `, ${currentposition} at ${currentemployer}` : ''}

  
</div>
              <div>
              {city}, {stateprovince}, {country}
              </div>

              
              <div style={{ display: 'flex', alignItems: 'center' }}>
  {socialMediaEntries.map((entry, index) => (
    <div key={index} style={{ marginRight: '10px' }}>
      {/* Display media type icon as clickable link */}
      {mediaTypeImages.hasOwnProperty(entry.media_type.toLowerCase()) && (
        <a href={entry.text_value.startsWith('http') ? entry.text_value : `//${entry.text_value}`} target="_blank" rel="noopener noreferrer">
          <img
            src={mediaTypeImages[entry.media_type.toLowerCase()]}
            alt={entry.media_type}
            style={{ width: '20px', height: '20px' }}
          />
        </a>
      )}
    </div>
  ))}


</div>

 
  </MDBCardBody> 
  </MDBCard>


{/* //////////////////////  DESCRIPTION  //////////////////////// */}

<MDBCard style={{ background: 'white', margin: '20px', border: '1px lightgrey solid', maxWidth: '580px' }}>
      <MDBCardBody>
        <div style={{ height: 'auto' }}>
          <div style={{ fontWeight: 'bolder' }}>Description</div>
          <br />
          {truncatedSummary}
          <br />
        </div>
      </MDBCardBody>
    </MDBCard>
 
{/* //////////////////////  EDUCATION + bootcamp //////////////////////// */}

<MDBCard style={{ background: 'white', margin: '20px', border: '1px lightgrey solid', maxWidth: '580px' }}>
      <MDBCardBody>
        <div style={{ height: 'auto' }}>
          <div style={{ fontWeight: 'bolder' }}>Education</div>
          <br />
            {schoolname && schoolprogram && schoolyear ? ` School: ${schoolname},  ${schoolprogram}, ${schoolyear}` : ''}
          <br />
            {bootcampname && bootcampprogram && bootcampyear ? ` Bootcamp: ${bootcampname}, ${bootcampprogram}, ${bootcampyear}` : ''}
        </div>
      </MDBCardBody>
    </MDBCard>

{/* //////////////////////  SKILLS & LANGUAGES //////////////////////// */}
<MDBCard style={{ background: "white", margin: "20px", border: '1px lightgrey solid', maxWidth: "580px" }}>
  <MDBCardBody>
    <div>
      <div style={{ fontWeight: 'bolder' }}>Skills List</div>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0, flexWrap: 'wrap' }}>
        {selectedValuesSkills.skills.map((skill, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginRight: '10px',
              marginBottom: '10px',
              padding: '5px 10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              maxWidth: '100%',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            <img
              src={skillIcons[skill]}
              alt={skill}
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
            {skill}
          </li>
        ))}
      </ul>
    </div>
  </MDBCardBody>
</MDBCard>


{/* //////////////////////  TESTING   //////////////////////// */}
<MDBCard style={{background: "white", margin: "20px", border: '1px lightgrey solid', maxWidth:"580px"}}>
  <MDBCardBody>
  <div>
  <div style={{ fontWeight: 'bolder' }}>Testing Accepted</div>
      <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
        {selectedValuesTests.testingAccepted.map((testingAccepted, index) => (
          <li
            key={index}
            style={{
              marginRight: '10px',
              padding: '5px 10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          >
            {testingAccepted}
          </li>
        ))}
      </ul>
    </div>
              </MDBCardBody> 
  </MDBCard>



              </MDBRow>
             

              </MDBCol>

    </MDBContainer>
    </div>


    <div className="porfoliioProjects3">
    <MDBContainer className="py-0 h-100" style={{backgroundColor:'transparent' }}>
   
   <MDBCol className="mb-1" style={{ width: '600px', minHeight: '500px'}}>

           <MDBRow style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>

          



 <div className="project1" style={{display:'flex', width:'650px'}}>

 <div>
<MDBCol className="mb-2" style={{ width:'300px' }}>
  <img
    src={`http://localhost:3009/${project1}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal(project1)}
  />
</MDBCol>
</div>

<div className="project1Description">
<MDBCol className="mb-2" style={{ width:'300px' }}>

<MDBCard style={{background: "none", margin: "0", border: 'none', maxWidth:"300px", maxHeight:"200px"}}>
  <MDBCardBody>

              <div style={{ fontWeight:'bolder'}}>
              Project Title
              </div>  
              <div>
              Description: sasdasdasdasda
              </div>
              <div>
              Stack Used 
              </div>
              <div style={{ fontWeight:'bolder'}}>
              Links
              </div>
              Live link
              <br></br>
              Git Link

 
  </MDBCardBody> 
  </MDBCard>

</MDBCol>

</div>

</div>

<MDBModal tabIndex="-1" show={isModalOpen} onHide={closeModal}>
  <MDBModalDialog className="modal-dialog-centered">
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Project Description * Github/Demo Links</MDBModalTitle>
        <button type="button" className="btn-close" onClick={closeModal}></button>
      </MDBModalHeader>
      <MDBModalBody>
        <img
          src={`http://localhost:3009/${selectedImage}`}
          alt="Selected Project"
          className="img-fluid"
        />
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>

       



        
<div className="project2" style={{display:'flex', width:'650px'}}>


  <div>
<MDBCol className="mb-2" style={{ width:'300px' }}>
  <img
    src={`http://localhost:3009/${project2}`}
    alt="Project2"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal2(project2)}
  />
</MDBCol>
</div>

<div className="project2Description">
<MDBCol className="mb-2" style={{ width:'300px' }}>

<MDBCard style={{background: "none", margin: "0", border: 'none', maxWidth:"300px", maxHeight:"200px"}}>
  <MDBCardBody>

              <div style={{ fontWeight:'bolder'}}>
              Project Title
              </div>  
              <div>
              Description: sasdasdasdasda
              </div>
              <div>
              Stack Used 
              </div>
              <div style={{ fontWeight:'bolder'}}>
              Links
              </div>
              Live link
              <br></br>
              Git Link

 
  </MDBCardBody> 
  </MDBCard>

</MDBCol>

</div>

</div>



<div className="project3" style={{display:'flex', width:'650px'}}>

  <div>
<MDBCol className="mb-2"  style={{ width:'300px' }}>
  <img
    src={`http://localhost:3009/${project3}`}
    alt="Project3"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal3(project3)}
  />
</MDBCol>
</div>


<div className="project3Description">
<MDBCol className="mb-2" style={{ width:'300px' }}>

<MDBCard style={{background: "none", margin: "0", border: 'none', maxWidth:"300px", maxHeight:"200px"}}>
  <MDBCardBody>

              <div style={{ fontWeight:'bolder'}}>
              Project Title
              </div>  
              <div>
              Description: sasdasdasdasda
              </div>
              <div>
              Stack Used 
              </div>
              <div style={{ fontWeight:'bolder'}}>
              Links
              </div>
              Live link
              <br></br>
              Git Link

 
  </MDBCardBody> 
  </MDBCard>

</MDBCol>

</div>

</div>

<MDBModal tabIndex="-1" show={isModalOpen3} onHide={closeModal3}>
  <MDBModalDialog className="modal-dialog-centered">
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle>Project Description 3 * Github/Demo Links 3</MDBModalTitle>
        <button type="button" className="btn-close" onClick={closeModal3}></button>
      </MDBModalHeader>
      <MDBModalBody>
        <img
          src={`http://localhost:3009/${selectedImage}`}
          alt="Selected Project3"
          className="img-fluid"
        />
      </MDBModalBody>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>


{/* <MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${project4}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal(project4)}
  />
</MDBCol><MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${project5}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal(project5)}
  />
</MDBCol><MDBCol className="mb-2" style={{ flexBasis: '50%', maxWidth: '50%' }}>
  <img
    src={`http://localhost:3009/${project1}`}
    alt="Project1"
    className="mt-1 mb-1 img-thumbnail"
    style={{ width: '300px', zIndex: '1', cursor: 'pointer' }}
    onClick={() => openModal(project1)}
  />
</MDBCol> */}
             
           </MDBRow>
         

           </MDBCol>




 </MDBContainer>
 </div>
   
  </div>
</div>


  
);
}

export default Profile;
