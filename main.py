import roxar.rms


def run(config):
    #ui_params = config['connection_response_object']
    #ui_selection = config['plugin_data']
	trj_name = config['trj_name']
	new_name = config['new_name']

	def rename_trj(init_name, renamed_name):
		count = 0
		for well in project.wells:
			for wellbore in well.all_wellbores:
				for trajectory in wellbore.trajectories:
					if trajectory.name == init_name:
						print(well.name)
						trajectory.name = renamed_name
						count+=1
						roxar.rms.info(f'Trajectory was changed for well: {well.name}')
		roxar.rms.info(f'Number of renamed trajectories: {count}')

	if trj_name and new_name:
		rename_trj(trj_name, new_name)
	else:
		roxar.rms.error(f'Trajectory name cannot be empty. Please enter the name of the trajectory')