let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

const table = document.createElement('table')
document.body.appendChild(table)

//----------------------------------------------------------------

const fejlec = [
    {text: "Vezetéknév", colspan:1},
    {text: "Keresztnév", colspan:2},
    {text: "Házas-e", colspan:1},
    {text: "Háziállat", colspan:1},
]

//----------------------------------------------------------------

const tablehead = document.createElement('thead')
table.appendChild(tablehead)

const tableheadrow = document.createElement('tr')
tablehead.appendChild(tableheadrow)

const th = document.createElement('th')
tableheadrow.appendChild(th)

const th2 = document.createElement('th')
tableheadrow.appendChild(th2)

const th3 = document.createElement('th')
tableheadrow.appendChild(th3)

const th4 = document.createElement('th')
tableheadrow.appendChild(th4)


th.innerHTML="Veznev"
th2.innerHTML="Kernev"
th2.colSpan = 2
th3.innerHTML="Házas-e"
th4.innerHTML="Háziállat"

const tablebody = document.createElement('tbody')
table.appendChild(tablebody)


const form = document.getElementById('form')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const lastname = document.getElementById("lastname") 
    const firstname = document.getElementById("firstname1") 
    const firstname2 = document.getElementById("firstname2") 
    const married = document.getElementById("married") 
    const pet = document.getElementById("pet") 
        
    const lastnamevalue = lastname.value
    const firstnamevalue = firstname.value
    let firstname2value = firstname2.value
    const marriedvalue = married.checked
    const petvalue = pet.value

    firstname2value = firstname2value === "" ? undefined:firstname2value 

    const newperson =
    {
        lastname: lastnamevalue,
        firstname1: firstnamevalue,
        firstname2: firstname2value,
        married: marriedvalue,
        pet: petvalue 
    }

    if (validatefields(lastname,firstname,pet)){

        array.push(newperson)
        console.log(array)
        tablebody.innerHTML = ""
        rendertable()
        form.reset()
    }
})

rendertable()

function rendertable(){
    for(const person of array){
        const tr = document.createElement('tr')
        tablebody.appendChild(tr)
        const lastname = document.createElement('td')
        tablebody.appendChild(tr)
        tr.appendChild(lastname)
        lastname.innerHTML = person.lastname
        const firstname = document.createElement('td')
        tablebody.appendChild(tr)
        tr.appendChild(firstname)
        firstname.innerHTML = person.firstname1
        
        
        
        
        tr.addEventListener('click',function(e){
            console.log('click')
            
    
            const ez = tablebody.querySelector('.selected')
            if(ez!=undefined){
                ez.classList.remove('selected')
            }
            e.currentTarget.classList.add('selected')
        })
    
        if(person.firstname2===undefined){
            firstname.colSpan = 2
        }
        else{
            const firstname2 = document.createElement('td')
            firstname2.innerHTML = person.firstname2
            tr.appendChild(firstname2)
    
        }
    
    
        const married = document.createElement('td')
        tablebody.appendChild(tr)
        tr.appendChild(married)
        married.innerHTML = person.married
    
        if(person.married === true){ //married.innerhtml = person.married ? "igen":"nem"
            married.innerHTML = "igen"
        }else{
            married.innerHTML = "nem"
        }
        
    
        const pet = document.createElement('td')
        tablebody.appendChild(tr)
        tr.appendChild(pet)
        pet.innerHTML = person.pet
        
    }
}

function validatefields(lastname,firstname,pet){
    
    let valtozo = form.querySelectorAll('.error')
    for(const error of valtozo){
        error.innerHTML = ''
    }
    

    let result = true
    if(lastname.value === ""){
        const par = lastname.parentElement
        const error = par.querySelector(".error")
        error.innerHTML = "Kötelező vezetéknév"
        result = false
    }
    if(firstname.value === ""){
        const par2 = firstname.parentElement
        const error2 = par2.querySelector(".error")
        error2.innerHTML = "Kötelező keresztnév"
        result = false

    }
    if(pet.value === ""){
        const par3 = pet.parentElement
        const error3 = par3.querySelector(".error")
        error3.innerHTML = "Kötelező állat"
        result = false

    }
    return result
}

function Createtablecell(element,inner,parent){
   const elem = document.createElement(element)
    elem.innerHTML = inner
    parent.appendChild(elem)
}

//Házi

for(const fejlec of fejlecek){
    const th = document.createElement('th')
    th.innerHTML = fejlec.text
    th.colSpan = fejlec.colspan;
    tableheadrow.appendChild(th)    
}

//----------------------------------------------------------------
