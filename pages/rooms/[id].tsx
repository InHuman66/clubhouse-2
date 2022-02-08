import React from 'react';
import { BackButton } from '../../components/BackButton';
import { Header } from '../../components/Header';
import { Room } from '../../components/Room';
import Axios from '../../core/axios'
import {GetServerSideProps} from "next";

type PropsType ={
  room:{
    title: string
    id: string
  }
}

export default function RoomPage({ room }:PropsType) {
  return (
    <>
      <Header />
      <div className="container mt-40">
        <BackButton title="All rooms" href="/rooms" />
      </div>
      <Room title={room.title} id={room.id} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { data } = await Axios.get('/rooms.json');
    const roomId = ctx.query.id;
    const room = data.find((obj:{title: string, id: string}) => obj.id === roomId);
    return {
      props: {
        room,
      },
    };
  } catch (error) {
    console.log('ERROR!');
    return {
      props: {
        rooms: [],
      },
    };
  }
};
