import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Jatin', 'Saransh', 'Saransh']
    const persons = [
        {
            id: 1,
            name: 'Jatin',
            age: 22,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Saransh',
            age: 25,
            skill: 'Java'
        },
        {
            id: 3,
            name: 'Shnatam',
            age: 23,
            skill: 'kuch nai'
        }
    ]
    // const personList = persons.map(person => <Person key={person.id} person={person} />)
const nameList = names.map((name, index) => <h1 key={index+1}>{index+1} {name}</h1>)
    return (
    // <div>{personList}</div>
        <div>{nameList}</div>
    )
}

export default NameList
