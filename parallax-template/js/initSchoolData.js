async function getSchoolData() {
    const SchoolData =
     await fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=NlPwGwmNPDi3urgPTFrOPuwp2jO88gSM4hZX5V76&_fields=id,school.name,school.state,school.city,school.school_url&_per_page=100&school.degrees_awarded.predominant=3")
    const response = await SchoolData.json()
    return response.results
}
async function getSchoolData2() {
    const SchoolData =
     await fetch("https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=NlPwGwmNPDi3urgPTFrOPuwp2jO88gSM4hZX5V76&_fields=id,school.name,school.state,school.city,school.school_url&_page=1&_per_page=100&school.degrees_awarded.predominant=3")
    const response = await SchoolData.json()
    return response.results
}

const callback = function(SchoolData) {
    console.log(SchoolData)
    for (const reading of SchoolData) {
    const li =  document.createElement('li')
    li.innerHTML =`<a href=//${reading['school.school_url']} target='_blank'>${reading['school.name']}</a>`
    document.querySelector('#schools-list').appendChild(li)
    }
}

getSchoolData().then(function(SchoolData) {
    callback(SchoolData);
    getSchoolData2().then(function(schoolData2) {
        callback(schoolData2)
    });
});