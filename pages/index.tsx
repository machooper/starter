import Component from '@/comps/component'
import helper from '@/lib/helper'

export default function Home() {
    var test = helper()
    console.log(test)
    return (
        <>
            <h1>Home Page</h1>
            <Component/>
        </>
    )
}