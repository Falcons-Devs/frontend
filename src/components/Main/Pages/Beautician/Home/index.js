import React from 'react';
import { Container, Profile, Agenda, Schedule, Procedures } from './styles';

export const Home = () => {
	return (
		<Container>
			<Profile>Mi perfil</Profile>
			<Agenda>Mi agenda</Agenda>
			<Schedule>Mis horarios</Schedule>
			<Procedures>Mis procedimientos</Procedures>
		</Container>
	);
};
