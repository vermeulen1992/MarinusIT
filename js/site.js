
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

		$("#menu-main").on("click", "a", null, function () {
			$(".nav-collapse").first().collapse('toggle');
		});

		document.fonts.ready.then(function () {
			let chartConfig = {
				type: 'horizontalBar',
				options: {
					scales: {
						xAxes: [{
							gridLines: {
								display:false
							},
							ticks: {
								beginAtZero: true,
								display: false
							}
						}],
						yAxes: [{
							gridLines: {
								display:false
							},
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
							var labels = this.data.labels;

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
			};
			var lfChart = document.getElementById('lf-chart');
			var tfChart = document.getElementById('tf-chart');
			var mChart = document.getElementById('m-chart');

			let lfData = [{
				backgroundColor: '#c82428',
				data: [6,5,5,5,4,3,1],
				barPercentage: 9,
				barThickness: 20,
				minBarLength: 100,
			}];
			let lfLabels = ["HTML,CSS,JS","C#","T-SQL","LINQ ","ASP.Net","PowerShell","Angular"]
			let lfChartData =  Object.assign({}, chartConfig);
			lfChartData.data = {
				labels: lfLabels,
				datasets: lfData
			};

			let tfData = [{
				backgroundColor: '#c82428',
				data: [5,5,4,4,1,1],
				barPercentage: 9,
				barThickness: 20,
				minBarLength: 100,
			}];
			let tfLabels = ["Git","Microsoft Visual Studio","Azure DevOps / TFS","Jetbrains tooling","Jira","GitLab"]
			let tfChartData =  Object.assign({}, chartConfig);
			tfChartData.data = {
				labels: tfLabels,
				datasets: tfData
			};

			let mData = [{
				backgroundColor: '#c82428',
				data: [5,5,4,4,4],
				barPercentage: 9,
				barThickness: 20,
				minBarLength: 100,
			}];
			let mLabels = ["Agile SCRUM","Object Oriented Programming","DevOps","UML", "Design Patterns"]
			let mChartData =  Object.assign({}, chartConfig);
			mChartData.data = {
				labels: mLabels,
				datasets: mData
			};

			new Chart(lfChart, lfChartData);
			new Chart(tfChart, tfChartData);
			new Chart(mChart, mChartData);


		});
	});