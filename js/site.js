
	jQuery(document).ready(function($) {

		// Progress bar
		NProgress.start();
		setTimeout(function () {
			NProgress.done();
			$(".fade").removeClass("out");
		}, 1000);

		// Local scrolling
		$('.brand').localScroll();
		$('.container').localScroll();

		document.fonts.ready.then(function () {

			var canvas = document.getElementById('skillsChart');
			let data = [{
				backgroundColor: '#c82428',
				data: [6, 5, 5,4,4,4,4,3,1,1],
				barPercentage: 0.75
			}];
			let labels = ["HTML,CSS,JS","C#","SQL","ASP.Net","Git","SCRUM","Azure DevOps / TFS","PowerShell","Angular","GitLab"]

			let myChart = new Chart(canvas, {
				type: 'horizontalBar',
				data: {
					labels: labels,
					datasets: data
				},
				options: {
					scales: {
						xAxes: [{
							ticks: {
								beginAtZero: true,
								display: false
							}
						}],
						yAxes: [{
							ticks: {
								display: false
							}
						}]
					},
					hover: false,
					animation: {
						duration:0,
						onComplete: function() {
							var chartInstance = this.chart;
							var ctx = chartInstance.ctx;
							ctx.textAlign = "left";
							ctx.font = "16px Roboto Condensed";
							ctx.fillStyle = "#fff";

							Chart.helpers.each(
								this.data.datasets.forEach(function(dataset, i) {
									var meta = chartInstance.controller.getDatasetMeta(i);
									Chart.helpers.each(
										meta.data.forEach(function(bar, index) {
											data = dataset.data[index];
											label = labels[index];
											if (i == 0) {
												ctx.fillText(label, 20, bar._model.y + 5);
												ctx.fillText(data, bar._model.x - 20, bar._model.y + 5);
											} else {
												ctx.fillText(label, bar._model.x - 20, bar._model.y + 5);
												ctx.fillText(data, bar._model.x - 20, bar._model.y + 5);
											}
										}),
										this
									);
								}),
								this
							);

						}
					},
					legend: {
						display: false
					},
					tooltips: {
						enabled: false
					}
				}
			});
		});
	});