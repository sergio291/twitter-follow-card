import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


export function App (){

    return (
        <section className='App'>
            <TwitterFollowCard 
            userName='midudev'>
            Miguel Angel Durán
            </TwitterFollowCard>

            <TwitterFollowCard 
            userName='react'>
            Sergio Gonzalez
            </TwitterFollowCard>
        </section>
    )
}