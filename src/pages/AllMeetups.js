import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA =[
{
   id:'m1',
   title:'This is first meetup',
   image:'https://thumbs.dreamstime.com/z/nice-fifth-most-populous-city-france-capital-alpes-maritimes-d%C3%A9partement-panorama-old-town-126515115.jpg',
   address:'',
   description:'This is first meetup, amazing which you definately should not miss.' 
},
{
    id:'m2',
    title:'This is second meetup',
    image:'https://thumbs.dreamstime.com/z/nice-fifth-most-populous-city-france-capital-alpes-maritimes-d%C3%A9partement-panorama-old-town-126515115.jpg',
    address:'',
    description:'This is second meetup, amazing which you definately should not miss.' 
 },
 {
    id:'m3',
    title:'This is third meetup',
    image:'https://thumbs.dreamstime.com/z/nice-fifth-most-populous-city-france-capital-alpes-maritimes-d%C3%A9partement-panorama-old-town-126515115.jpg',
    address:'',
    description:'This is third meetup, amazing which you definately should not miss.' 
 }
];

function AllMeetupsPage(){
    return(
        <section>
            <h1>All Meetups</h1>
           <MeetupList meetups={DUMMY_DATA}/>
        </section>
    );
}
export default AllMeetupsPage;