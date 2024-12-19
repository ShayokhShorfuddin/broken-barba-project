"use client";

import { useEffect } from "react";
import barba from "@barba/core";
import gsap from "gsap";

export default function Transition() {
	useEffect(() => {
		function pageTransition() {
			const timeline = gsap.timeline();

			timeline.to("#transition", {
				duration: 1,
				scaleY: 1,
				transformOrigin: "bottom",
				ease: "power4.inOut",
			});

			timeline.to("#transition", {
				duration: 1,
				scaleY: 0,
				transformOrigin: "top",
				ease: "power4.inOut",
			});
		}

		function delayTransition(milliseconds: number) {
			return new Promise((resolve) => {
				setTimeout(resolve, milliseconds);
			});
		}

		barba.init({
			sync: true,
			transitions: [
				{
					async leave() {
						pageTransition();
						await delayTransition(1000);
					},
				},
			],
		});
	}, []);

	return null;
}
