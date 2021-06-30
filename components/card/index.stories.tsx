import React, { useState } from 'react';
import { Stack } from '../_foundations/common';
import { withKnobs } from '@storybook/addon-knobs';
import { SystemWrapper, SystemBlock, ComponentBlock } from '../_utils/storybook';
import Card from './component/Card';
import { Heading, Text } from '../_foundations';
import Button from '../button/component/Button';

export default {
	title: 'Component|Card',
	// component: [Tabs, TabPane],
	decorators: [SystemWrapper, withKnobs]
};

const img = `https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80`;

export const Skeleton = () => {
	return (
		<SystemBlock title="BCC Design System - Vertical">
			<Stack spacing="xl">
				<Card maxWidth={300}>
					<Card.Media skeleton height={200} />
					<Card.Contents>
						<Card.Title skeleton />
						<Card.TitleSecondary skeleton />
						<Card.Description skeleton />
					</Card.Contents>
					<Card.Actions justify="end">
						<Button skeleton>Read More</Button>
					</Card.Actions>
				</Card>
			</Stack>
		</SystemBlock>
	);
};

export const Vertical = () => {
	return (
		<SystemBlock title="BCC Design System - Vertical">
			<Stack spacing="xl">
				<Card maxWidth={300}>
					<Card.Media src={img} height={200} />
					<Card.Contents>
						<Card.Title>Title</Card.Title>
						<Card.TitleSecondary>Secondary Text</Card.TitleSecondary>
						<Card.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur saepe minima
							dolorem adipisci porro eveniet
						</Card.Description>
					</Card.Contents>
					<Card.Actions justify="start">
						<Button condensed type="text">
							Read More
						</Button>
					</Card.Actions>
				</Card>
			</Stack>
			<div style={{ height: 20 }}></div>
			<Stack spacing="xl">
				<Card maxWidth={300}>
					<Card.Media src={img} height={200} />
					<Card.Contents>
						<Card.Title>Title</Card.Title>
						<Card.TitleSecondary>Secondary Text</Card.TitleSecondary>
						<Card.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur saepe minima
							dolorem adipisci porro eveniet
						</Card.Description>
					</Card.Contents>
					<Card.Actions justify="end">
						<Button>Read More</Button>
					</Card.Actions>
				</Card>
			</Stack>
		</SystemBlock>
	);
};

export const Horizontal = () => {
	return (
		<SystemBlock title="BCC Design System - Horizontal">
			<Stack spacing="xl">
				<Card maxWidth={510}>
					<Card.Media src={img} height={117} />
					<Card.Contents>
						<Card.Title>Title</Card.Title>
						<Card.TitleSecondary>Secondary Text</Card.TitleSecondary>
						<Card.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur saepe minima
							dolorem adipisci porro eveniet
						</Card.Description>
					</Card.Contents>
					<Card.Actions justify="start">
						<Button condensed type="text">
							Read More
						</Button>
					</Card.Actions>
				</Card>
			</Stack>
			<div style={{ height: 20 }}></div>
			<Stack spacing="xl">
				<Card maxWidth={510}>
					<Card.Media src={img} height={117} />
					<Card.Contents>
						<Card.Title>Title</Card.Title>
						<Card.TitleSecondary>Secondary Text</Card.TitleSecondary>
						<Card.Description>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur saepe minima
							dolorem adipisci porro eveniet
						</Card.Description>
					</Card.Contents>
					<Card.Actions justify="end">
						<Button>Read More</Button>
					</Card.Actions>
				</Card>
			</Stack>
		</SystemBlock>
	);
};

export const List = () => {
	return (
		<SystemBlock title="BCC Design System - CardList">
			<Stack spacing="xl">
				<Card.List>
					<Card maxWidth={300}>
						<Card.Media src={img} height={200} />
						<Card.Contents>
							<Card.Title>Title</Card.Title>
							<Card.TitleSecondary>Secondary Text</Card.TitleSecondary>
							<Card.Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur saepe minima
								dolorem adipisci porro eveniet
							</Card.Description>
						</Card.Contents>
						<Card.Actions justify="start">
							<Button condensed type="text">
								Read More
							</Button>
						</Card.Actions>
					</Card>
					<Card maxWidth={300}>
						<Card.Media src={img} height={200} />
						<Card.Contents>
							<Card.Title>Title</Card.Title>
							<Card.TitleSecondary>Secondary Text</Card.TitleSecondary>
							<Card.Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur saepe minima
								dolorem adipisci porro eveniet
							</Card.Description>
						</Card.Contents>
						<Card.Actions justify="start">
							<Button condensed type="text">
								Read More
							</Button>
						</Card.Actions>
					</Card>
					<Card maxWidth={300}>
						<Card.Media src={img} height={200} />
						<Card.Contents>
							<Card.Title>Title</Card.Title>
							<Card.TitleSecondary>Secondary Text</Card.TitleSecondary>
							<Card.Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur saepe minima
								dolorem adipisci porro eveniet
							</Card.Description>
						</Card.Contents>
						<Card.Actions justify="start">
							<Button condensed type="text">
								Read More
							</Button>
						</Card.Actions>
					</Card>
					<Card maxWidth={300}>
						<Card.Media src={img} height={200} />
						<Card.Contents>
							<Card.Title>Title</Card.Title>
							<Card.TitleSecondary>Secondary Text</Card.TitleSecondary>
							<Card.Description>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum consequuntur saepe minima
								dolorem adipisci porro eveniet
							</Card.Description>
						</Card.Contents>
						<Card.Actions justify="start">
							<Button condensed type="text">
								Read More
							</Button>
						</Card.Actions>
					</Card>
				</Card.List>
			</Stack>
		</SystemBlock>
	);
};
