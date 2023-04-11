'use client'

import { Spoiler } from "@mantine/core";

const MoviePlot = ({plot}:{plot: string | null}) => {
	return (
		<Spoiler maxHeight={80} showLabel="Show more" hideLabel="Hide" className="text-base-content bg-base-300 rounded p-5 mt-10 font-light">
			<h4>Plot:</h4>
			{plot}
		</Spoiler>
	);
}

export default MoviePlot;