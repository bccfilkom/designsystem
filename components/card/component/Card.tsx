import { StyledComponent } from '@emotion/styled';
import React from 'react';
import styled, { css } from 'styled-components';

export interface CardProps {
	maxWidth?: number;
	children?: React.ReactNode;
	className?: string;
}

export interface ContentsPorps {}

export interface MediaProps {
	height?: number;
	skeleton?: boolean;
}

export interface ActionsProps {
	justify?: 'start' | 'end' | 'spaceBetween';
	reverse?: boolean;
}

export interface ListProps {
	gap?: number;
}

export interface CardTypographyProps {
	children?: string;
	skeleton?: boolean;
}

const CardComp = styled.div<CardProps>`
	border-radius: 9px;
	background: #ffffff;
	box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.08);
	overflow: hidden;
	padding-bottom: 32px;
	max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}px` : '300px')};
`;

const Contents = styled.div<ContentsPorps>`
	padding: 32px 32px 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Media = styled.img.attrs<MediaProps>((props) => ({
	className: props.skeleton && 'skeleton'
}))<MediaProps>`
	width: 100%;
	height: ${(props) => (props.height ? `${props.height}px` : '200px')};
	object-fit: cover;
`;

Media.defaultProps = {
	src: 'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='
};

const Actions = styled.div<ActionsProps>`
	padding: 16px 32px 0;
	display: flex;
	flex-direction: ${(props) => (props.reverse ? 'row-reverse' : 'row')};
	justify-content: ${(props) => (props.justify === 'spaceBetween' ? 'space-between' : `flex-${props.justify}`)};
`;

Actions.defaultProps = {
	justify: 'start'
};

const List = styled.div<ListProps>`
	display: flex;
	flex-wrap: wrap;
	gap: ${(props) => (props.gap ? `${props.gap}px` : `16px`)};
`;

const Title = styled.h5.attrs<CardTypographyProps>((props) => ({
	className: props.skeleton && 'skeleton'
}))<CardTypographyProps>`
	align-self: flex-start;
	font-weight: 400;
	font-size: 2rem !important;
	white-space: normal;
	word-break: break-all;
	${(props) =>
		props.skeleton &&
		css`
			color: transparent;
			user-select: none;
		`}
`;

Title.defaultProps = {
	children: 'Example Title'
};

const TitleSecondary = styled.h5.attrs<CardTypographyProps>((props) => ({
	className: props.skeleton && 'skeleton'
}))<CardTypographyProps>`
	align-self: flex-start;
	font-weight: 400;
	font-size: 1.33rem !important;
	white-space: normal;
	word-break: break-all;
	${(props) =>
		props.skeleton &&
		css`
			color: transparent;
			user-select: none;
		`}
`;

TitleSecondary.defaultProps = {
	children: 'Secondary'
};

const DescriptionComp = styled.span`
	font-weight: 400;
	font-size: 1.16 !important;
	white-space: normal;
	word-break: break-all;
`;

const SkeletonsWrapper = styled.div`
	display: flex;
	gap: 8px;
	flex-direction: column;
`;

const Description = ({ skeleton, ...res }: CardTypographyProps) => {
	return skeleton ? (
		<SkeletonsWrapper>
			<div className="skeleton" />
			<div className="skeleton" />
			<div className="skeleton" />
		</SkeletonsWrapper>
	) : (
		<DescriptionComp {...res} />
	);
};

const Card: React.FC<CardProps> & {
	List: typeof List;
	Media: typeof Media;
	Title: typeof Title;
	Contents: typeof Contents;
	TitleSecondary: typeof TitleSecondary;
	Description: typeof Description;
	Actions: typeof Actions
} = ({children, ...props}) => {
	return (
		<CardComp {...props}>
			{children}
		</CardComp>)
};

Card.List = List;
Card.Media = Media;
Card.Title = Title;
Card.Contents = Contents;
Card.TitleSecondary = TitleSecondary;
Card.Description = Description;
Card.Actions = Actions

export default Card;
