import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { ConversationCard } from '../components/ConversationCard';
import Link from 'next/link';
import React from 'react';
import Axios from '../core/axios';

type PropsType ={
  rooms?: Array<{
    id: string
    title: string
    guests: string[]
    avatars: string[]
    guestsCount: number
    speakersCount: number
  }>
}

export  default function  RoomsPage ({rooms =[]}:PropsType){
  return (
    <>
      <Header />
      <div className="container">
        <div className=" mt-40 d-flex align-items-center justify-content-between">
          <h1>All conversations</h1>
          <Button color="green">+ Start room</Button>
        </div>
        <div className="grid mt-30">
          {rooms.map((obj) => (
            <Link key={obj.id} href={`/rooms/${obj.id}`}>
              <a className="d-flex">
                <ConversationCard
                  title={obj.title}
                  avatars={obj.avatars}
                  guests={obj.guests}
                  guestsCount={obj.guestsCount}
                  speakersCount={obj.speakersCount}
                />
              </a>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const { data } = await Axios.get('/rooms.json');
    console.log('alo')
    return {
      props: {
        rooms: data,
      },
    };
  } catch (error) {
    console.log('ERROR!');
    return {
      props: {
        rooms: [],
      },
    }
  }
}

