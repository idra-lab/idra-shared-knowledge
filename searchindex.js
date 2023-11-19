Search.setIndex({"docnames": ["01_ros_2/00_index", "01_ros_2/01_CLI/00_index", "01_ros_2/02_Packages/00_index", "01_ros_2/02_Packages/01_workspace", "01_ros_2/02_Packages/02_pkg_creation", "01_ros_2/02_Packages/03_launch_files", "01_ros_2/10_Simulation/00_index", "01_ros_2/10_Simulation/01_node_desc", "01_ros_2/10_Simulation/02_launch_file", "01_ros_2/10_Simulation/02b_full_launch_file", "02_linux/00_index", "02_linux/02_docker/00_index", "02_linux/02_docker/01_installation", "02_linux/03_github_actions/00_index", "02_linux/03_github_actions/01_runners", "02_linux/03_github_actions/02_setup", "02_linux/03_github_actions/03_triggers", "02_linux/03_github_actions/04_jobs", "02_linux/03_github_actions/30_examples/00_index", "02_linux/03_github_actions/30_examples/01_sphinx_build", "02_linux/10_coppelia/00_index", "02_linux/10_coppelia/01_installation", "02_linux/10_coppelia/02_ros2_integration", "CONTRIBUTING", "README", "index"], "filenames": ["01_ros_2/00_index.rst", "01_ros_2/01_CLI/00_index.rst", "01_ros_2/02_Packages/00_index.rst", "01_ros_2/02_Packages/01_workspace.rst", "01_ros_2/02_Packages/02_pkg_creation.rst", "01_ros_2/02_Packages/03_launch_files.rst", "01_ros_2/10_Simulation/00_index.rst", "01_ros_2/10_Simulation/01_node_desc.rst", "01_ros_2/10_Simulation/02_launch_file.rst", "01_ros_2/10_Simulation/02b_full_launch_file.rst", "02_linux/00_index.rst", "02_linux/02_docker/00_index.rst", "02_linux/02_docker/01_installation.rst", "02_linux/03_github_actions/00_index.rst", "02_linux/03_github_actions/01_runners.rst", "02_linux/03_github_actions/02_setup.rst", "02_linux/03_github_actions/03_triggers.rst", "02_linux/03_github_actions/04_jobs.rst", "02_linux/03_github_actions/30_examples/00_index.rst", "02_linux/03_github_actions/30_examples/01_sphinx_build.rst", "02_linux/10_coppelia/00_index.rst", "02_linux/10_coppelia/01_installation.rst", "02_linux/10_coppelia/02_ros2_integration.rst", "CONTRIBUTING.md", "README.md", "index.rst"], "titles": ["ROS2 Notes", "CLI Tools", "Workspaces and Packages", "Workspaces", "Package creation", "Launch files", "Simulation Setup", "Node description", "Launch file", "Simulation launch file", "Linux and other Utilities", "Docker", "Installation", "Github Actions for CI/CD", "Action runners", "Actions setup", "Workflow triggers", "Jobs", "Examples", "Building documentation with Sphinx", "Coppelia Simulator", "Installation", "ROS2 integration", "Contributing", "IDRA lab open knowledge", "IDRA lab open knowledge"], "terms": {"These": [0, 25], "ar": [0, 2, 4, 5, 6, 7, 8, 13, 14, 15, 16, 17, 20, 23, 25], "person": 0, "work": [0, 13, 17, 20, 21], "second": [0, 2, 4], "version": [0, 6, 8, 13, 17, 20, 21, 24, 25], "robot": [0, 6, 7, 8, 9], "oper": [0, 13, 17], "system": [0, 2, 3, 6, 7], "report": [0, 6, 7, 13, 14, 17], "here": [0, 2, 4, 5, 6, 7, 8, 11, 12, 13, 14, 24, 25], "mainli": [0, 2, 4], "valid": 0, "humbl": [0, 2, 13, 17], "ro": [0, 2, 3, 4, 6, 8, 13, 17], "": [0, 2, 5, 6, 7, 11, 12, 13, 17, 24, 25], "compat": 0, "ubuntu": [0, 11, 12, 13, 17, 20, 21], "22": [0, 13, 17, 20, 21], "04": [0, 13, 17, 20, 21], "lt": 0, "For": [0, 2, 6, 8, 11, 12, 13, 16], "further": 0, "inform": [0, 6, 7], "follow": [0, 2, 3, 4, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 20, 21, 22, 23, 25], "offici": [0, 2, 5, 11, 12, 13], "document": [0, 2, 5, 16, 17, 23], "cli": [0, 11, 12], "tool": [0, 13], "workspac": [0, 4, 13, 17], "packag": [0, 5, 6, 7, 8, 9, 11, 12], "creation": [0, 13, 16], "launch": 0, "file": [0, 3, 11, 12, 13, 15, 20, 21, 22], "simul": [0, 7, 8, 10], "setup": [0, 2, 3, 4, 9, 10, 17], "node": [0, 2, 5, 8, 9, 13, 17], "descript": [0, 8, 9], "more": [0, 2, 4, 6, 7, 8, 9, 11, 12, 13, 16, 17, 20, 21, 23, 25], "instruct": [0, 13, 14], "differ": [0, 2, 4, 6, 7, 8, 13, 15, 16], "platform": 0, "refer": [0, 13], "The": [0, 2, 4, 5, 6, 7, 9, 13, 15, 17, 20, 21, 23, 25], "shorthand": 0, "base": [0, 2, 5, 13, 16, 20], "debian": 0, "first": [0, 2, 6, 8], "make": [0, 2], "sure": [0, 2], "your": 0, "local": [0, 24, 25], "support": 0, "utf": 0, "8": 0, "In": [0, 2, 3, 4, 6, 8, 11, 12, 13, 14, 15, 17, 19, 20, 22], "gener": [0, 2, 3, 6, 7, 8, 13, 14, 15, 19, 23, 24, 25], "thi": [0, 2, 3, 4, 6, 7, 8, 13, 14, 16, 17, 19, 20, 22, 24, 25], "hold": 0, "see": [0, 2, 3], "command": [0, 2, 3, 4, 6, 7, 13, 17, 20, 21, 22], "enabl": [0, 6, 7, 8], "univers": [0, 6, 8], "repositori": [0, 11, 12, 13, 14, 15, 17, 19, 23, 24, 25], "add": [0, 2, 4, 11, 12, 13, 14, 20, 21, 23, 25], "teh": 0, "gpg": [0, 11, 12], "kye": 0, "apt": [0, 11, 12, 13], "sourc": [0, 2, 3, 4, 11, 12, 13, 17], "list": [0, 2, 4, 5, 6, 8, 11, 12, 13, 17, 20, 22], "sudo": [0, 11, 12, 13], "softwar": [0, 13, 20, 21], "properti": 0, "common": 0, "updat": [0, 2, 4, 11, 12, 13], "curl": [0, 11, 12], "y": [0, 13], "ssl": 0, "http": [0, 11, 12, 13], "raw": 0, "githubusercont": 0, "com": [0, 11, 12, 13], "rosdistro": 0, "master": 0, "kei": [0, 6, 7, 11, 12], "o": [0, 2, 4, 6, 8, 9, 11, 12, 13, 17], "usr": [0, 2, 4], "share": [0, 2, 4, 6, 8], "keyr": [0, 11, 12], "archiv": 0, "echo": [0, 11, 12, 20, 21], "deb": [0, 11, 12], "arch": [0, 11, 12], "dpkg": [0, 11, 12], "print": [0, 11, 12], "architectur": [0, 11, 12], "sign": [0, 11, 12], "org": 0, "etc": [0, 6, 8, 9, 11, 12], "releas": [0, 11, 12, 13, 17], "ubuntu_codenam": 0, "main": [0, 2, 4, 13, 16, 23, 25], "tee": [0, 11, 12], "d": [0, 6, 8, 9, 11, 12], "dev": [0, 11, 12], "null": [0, 11, 12], "befor": 0, "new": [0, 2, 4, 13, 17, 20, 22, 23, 25], "suggest": 0, "upgrad": 0, "alreadi": [0, 2, 4, 13, 17], "ensur": [0, 6, 7], "depend": [0, 2, 4, 13, 17], "met": 0, "all": [0, 2, 4, 6, 7, 8, 20, 22], "relev": [0, 6, 8], "start": [0, 2, 5, 6, 8], "desktop": 0, "i": [2, 3, 4, 6, 7, 8, 9, 13, 14, 15, 16, 17, 19, 20, 21, 22, 23, 25], "load": [2, 6, 7, 8, 24, 25], "instanc": [2, 6, 8, 13, 16, 20, 22], "ros2": [2, 4, 6, 7, 8, 9, 10, 25], "opt": [2, 13, 17], "sh": [2, 3, 6, 8, 13, 17], "choos": [2, 13, 17], "appropri": 2, "distribut": 2, "step": [2, 4, 13, 15, 17], "can": [2, 4, 5, 6, 7, 8, 13, 15, 16, 17, 20, 21, 22, 23, 25], "perform": 2, "automat": [2, 4, 6, 7, 13, 19, 20, 22], "insert": [2, 3, 4], "insid": [2, 3, 4, 5, 20, 22, 24, 25], "bashrc": [2, 3, 20, 21], "2": [2, 3, 23, 25], "exploit": [2, 3], "ha": [2, 3, 4, 6, 8, 20, 22], "structur": [2, 3, 4, 23, 25], "path": [2, 3, 4, 6, 8, 9], "build": [2, 3, 4, 23], "colcon_ignor": [2, 3], "influxdb": [2, 3], "bridg": [2, 3, 6, 7], "ur_coppeliasim": [2, 3, 6, 8, 9], "instal": [2, 3, 4, 10, 13, 14, 17, 22, 24, 25], "local_setup": [2, 3], "bash": [2, 3], "ps1": [2, 3], "_local_setup_util_ps1": [2, 3], "py": [2, 3, 4, 5, 23, 25], "_local_setup_util_sh": [2, 3], "zsh": [2, 3], "log": [2, 3, 6, 8, 9], "build_2023": [2, 3], "11": [2, 3], "07_14": [2, 3], "41": [2, 3], "48": [2, 3], "07_15": [2, 3], "35": [2, 3], "32": [2, 3], "latest": [2, 3, 13, 17], "latest_build": [2, 3], "src": [2, 3, 4], "develop": [2, 3, 4, 13, 16], "happen": [2, 3], "onli": [2, 3, 13], "folder": [2, 3, 4, 13, 20, 22, 23, 24, 25], "everyth": [2, 3], "els": [2, 3], "accomplish": [2, 3, 20, 22], "colcon": [2, 3, 20, 22], "must": [2, 3, 4, 6, 8, 13, 17, 20, 22], "call": [2, 3, 4, 6, 8, 13, 17, 20, 21], "root": [2, 3, 4, 20, 21], "directori": [2, 3, 4, 5, 6, 8, 13, 15, 20, 21], "Then": [2, 3, 6, 8], "let": [2, 3], "avail": [2, 3, 13, 17], "pacakg": [2, 3], "script": [2, 3, 4, 5, 6, 8, 13, 23, 25], "even": [2, 3, 13, 16, 17, 23, 25], "could": [2, 3, 4, 13, 14, 17, 23, 24, 25], "conveni": [2, 3], "creat": [2, 4, 13, 17], "program": [2, 4, 20, 22], "languag": [2, 4], "onc": [2, 4, 5, 20, 22], "e": [2, 4, 6, 8, 13, 14, 17], "g": [2, 4, 6, 8, 13, 17], "my_packag": [2, 4], "pkg": [2, 4], "type": [2, 4], "ament_python": [2, 4], "rclpy": [2, 4], "where": [2, 4, 5, 23, 25], "case": [2, 4, 6, 7, 8, 13, 17, 20, 22], "lone": [2, 4], "one": [2, 4, 13, 14, 15, 17], "librari": [2, 4, 13, 17, 19], "tree": [2, 4, 6, 7], "__init__": [2, 4], "xml": [2, 4, 5], "resourc": [2, 4, 6, 8], "cfg": [2, 4], "test": [2, 4, 13], "test_copyright": [2, 4], "test_flake8": [2, 4], "test_pep257": [2, 4], "scrip": [2, 4], "place": [2, 4, 5], "same": [2, 4, 5, 6, 8], "name": [2, 4, 5, 6, 8, 9, 13, 15, 17], "initi": [2, 4], "an": [2, 4, 6, 7, 13, 17], "empti": [2, 4], "present": [2, 4, 20, 21, 23, 25], "sinc": [2, 4, 6, 8], "than": [2, 4, 6, 8], "like": [2, 4], "requir": [2, 4, 6, 8, 13, 20, 22], "us": [2, 4, 5, 6, 8, 11, 12, 13, 14, 17, 19, 20, 22, 23, 24, 25], "which": [2, 4, 6, 7, 13, 14, 17, 20, 22], "store": [2, 4, 20, 21], "entri": [2, 4, 23, 25], "mkdir": [2, 4], "To": [2, 4, 13, 14, 20, 21, 22, 23, 24, 25], "copi": [2, 4], "dure": [2, 4], "shown": [2, 4], "import": [2, 4, 5, 6, 8, 9, 23, 25], "section": [2, 4, 6, 8, 20], "from": [2, 4, 5, 6, 7, 8, 9, 13, 17, 20, 21], "glob": [2, 4], "later": [2, 4], "data_fil": [2, 4], "ament_index": [2, 4], "resource_index": [2, 4], "package_nam": [2, 4, 5], "join": [2, 4, 6, 8, 9], "If": [2, 4, 11, 12], "particular": [2, 4, 6, 8, 13, 19, 20, 22], "tupl": [2, 4], "each": [2, 4, 6, 13, 15, 16, 17], "contain": [2, 4, 6, 8], "destin": [2, 4], "data": [2, 4, 6, 7], "rel": [2, 4], "space": [2, 4], "while": [2, 4, 23, 25], "element": [2, 4], "we": [2, 4], "includ": [2, 4], "As": [2, 4, 6, 7, 8, 13, 17, 20, 22], "previous": [2, 4], "mention": [2, 4, 6, 7, 13, 17], "good": [2, 4], "practis": [2, 4], "its": [2, 4, 6, 8, 13, 17], "recommend": [2, 4, 13, 14, 20, 21], "inclus": [2, 4], "guard": [2, 4], "barebon": [2, 4], "bin": [2, 4], "env": [2, 4], "python3": [2, 4], "def": [2, 4, 5, 6, 8, 9], "arg": [2, 4], "none": [2, 4], "function": [2, 4, 6, 8], "pass": [2, 4], "__name__": [2, 4], "__main__": [2, 4], "A": [2, 4, 13, 15, 16], "fundament": [2, 4], "entry_point": [2, 4], "console_script": [2, 4], "executable_nam": [2, 4, 5], "script_nam": [2, 4], "need": [2, 4, 6, 7, 13, 17, 20, 22], "been": [2, 4, 6, 8, 20, 22], "do": [2, 4, 20, 21], "necessarili": [2, 4], "similarli": [2, 4, 6, 8], "ones": [2, 4], "just": [2, 4], "chang": [2, 4, 20, 22], "ament_cmak": [2, 4], "result": [2, 4], "cmakelist": [2, 4], "txt": [2, 4, 20, 22], "applic": [2, 4], "cpp": [2, 4], "should": [2, 4, 13], "header": [2, 4], "code": [2, 4, 13, 17, 20, 21], "order": [2, 4, 6, 7, 13, 19], "correctli": [2, 4], "target": [2, 4, 6, 7], "bare": [2, 4], "exampl": [2, 4, 10, 16, 17, 20, 21, 22], "initialix": [2, 4], "my_nod": [2, 4], "simple_nod": [2, 4], "add_execut": [2, 4], "ament_target_depend": [2, 4], "rclcpp": [2, 4], "lib": [2, 4], "project_nam": [2, 4], "It": [2, 4, 20, 21], "assum": [2, 4, 6, 8], "direct": [2, 4, 13, 17], "them": [2, 4, 5, 6, 7], "multipl": [2, 5], "thei": [2, 5, 13, 14], "usual": [2, 5, 6, 8, 13, 17], "file_nam": [2, 5], "format": [2, 5], "either": [2, 5, 13, 16], "yaml": [2, 5, 6, 8, 9, 13, 15], "complet": [2, 5, 6, 8, 9], "found": [2, 5, 6, 7, 8, 13, 17], "launchdescript": [2, 5, 6, 8, 9], "launch_ro": [2, 5, 6, 8, 9], "action": [2, 5, 6, 8, 9, 10, 16, 17], "generate_launch_descript": [2, 5, 6, 8, 9], "return": [2, 5, 6, 8, 9], "output": [2, 5, 6, 8, 9], "screen": [2, 5], "take": [2, 5], "input": [2, 5], "how": [2, 5], "python": [5, 13, 17, 19, 23, 25], "execut": [5, 6, 8, 9, 13, 14, 15, 16, 17], "set": [6, 8, 13, 14, 17], "up": [6, 13], "lot": [6, 23, 25], "interact": 6, "other": [6, 24, 25], "graph": 6, "show": 6, "associ": 6, "relationship": 6, "joint_state_broadcast": [6, 7, 8, 9], "part": [6, 7], "control": [6, 7, 8, 9], "detail": [6, 7, 8, 9, 11, 12, 13, 16], "essenti": [6, 7], "broadcast": [6, 7, 8, 9], "read": [6, 7], "state": [6, 7, 8, 9], "interfac": [6, 7, 8, 20, 22], "joint_stat": [6, 7], "topic": [6, 7, 8, 23, 25], "Such": [6, 7], "collect": [6, 7], "robot_state_publish": [6, 7, 8, 9], "publish": [6, 7, 8, 9], "combin": [6, 7, 13, 16], "knowledg": [6, 7], "kinemat": [6, 7], "full": [6, 7], "transform": [6, 7], "link": [6, 7, 13, 16], "tf": [6, 7], "tf_static": [6, 7], "motion_control_handl": [6, 7, 8, 9], "still": [6, 7], "spawn": [6, 7], "handl": [6, 7, 8, 9], "move": [6, 7, 8], "rviz": [6, 7, 8, 9], "specifi": [6, 7, 13, 17, 20, 22], "posit": [6, 7], "target_fram": [6, 7, 8, 9], "cartesian_mototion_control": [6, 7], "ani": [6, 7], "custom": [6, 7, 13, 17], "implement": [6, 7], "cartesianmotioncontrol": [6, 7], "comput": [6, 7, 13, 14], "sent": [6, 7], "sim_ros2_interfac": [6, 7, 20, 22], "instead": [6, 7, 13, 17], "provid": [6, 7, 8, 11, 12, 13, 20, 21, 23, 25], "coppeliasim": [6, 7, 8, 20, 21, 22], "between": [6, 7], "world": [6, 7], "coppelia": [6, 7, 8, 10, 21], "transform_listener_impl_": [6, 7], "reliabl": [6, 7], "process": [6, 7], "note": [6, 7, 20, 25], "miss": [6, 7], "robot_control": [6, 7, 8, 9], "final": [6, 7, 8, 9, 24, 25], "standalon": [6, 7], "controller_manag": [6, 7, 8, 9], "manag": [6, 7, 8], "commun": [6, 7], "doe": [6, 8], "itself": [6, 8], "therefor": [6, 8], "manual": [6, 8, 13, 16], "coppeliasim_root": [6, 8], "proper": [6, 8, 13, 14], "ttt": [6, 8], "scene": [6, 8], "select": [6, 8], "after": [6, 8, 13, 15, 17, 20, 22], "explain": [6, 8], "xacro": [6, 8, 9], "ament_index_python": [6, 8, 9], "get_package_share_directori": [6, 8, 9], "substitut": [6, 8, 9], "pathjoinsubstitut": [6, 8, 9], "findpackageshar": [6, 8, 9], "defin": [6, 8, 13, 15], "configur": [6, 8, 13, 17, 19, 20, 22, 23, 25], "share_pkg_dir": [6, 8, 9], "xacro_path": [6, 8, 9], "urdf": [6, 8, 9], "ur": [6, 8, 9], "available_joint_control": [6, 8, 9], "config": [6, 8, 9], "ur_controllers_coppelia": [6, 8, 9], "declared_argu": [6, 8, 9], "use_sim_tim": [6, 8, 9], "true": [6, 8, 9], "ur_typ": [6, 8, 9], "ur3": [6, 8, 9], "robot_description_cont": [6, 8, 9], "process_fil": [6, 8, 9], "map": [6, 8, 9], "safety_limit": [6, 8, 9], "safety_pos_margin": [6, 8, 9], "0": [6, 8, 9, 13, 16], "15": [6, 8, 9], "safety_k_posit": [6, 8, 9], "20": [6, 8, 9], "prefix": [6, 8, 9, 23, 25], "sim_ignit": [6, 8, 9], "fals": [6, 8, 9], "sim_gazebo": [6, 8, 9], "simulation_control": [6, 8, 9], "toprettyxml": [6, 8, 9], "indent": [6, 8, 9], "robot_descript": [6, 8, 9], "some": [6, 8], "given": [6, 8], "availab": [6, 8], "model": [6, 8], "compil": [6, 8, 20, 22], "both": [6, 8, 9], "gazebo": [6, 8], "classic": [6, 8], "ignit": [6, 8], "disabl": [6, 8], "control_nod": [6, 8, 9], "ros2_control_nod": [6, 8, 9], "paramet": [6, 8, 9], "remap": [6, 8, 9], "cartesian_motion_control": [6, 8, 9], "have": [6, 8, 13, 15, 17, 20, 22], "synchron": [6, 8], "might": [6, 8, 13, 15, 16, 17, 20, 22], "slower": [6, 8], "real": [6, 8], "time": [6, 8], "when": [6, 8, 13, 16], "becom": [6, 8], "complex": [6, 8], "trivial": [6, 8], "acceler": [6, 8], "furthermor": [6, 8, 23, 25], "eas": [6, 8], "sake": [6, 8], "demonstr": [6, 8], "joint_state_broadcaster_spawn": [6, 8, 9], "spawner": [6, 8, 9], "argument": [6, 8, 9], "c": [6, 8, 9], "joint": [6, 8, 9], "bound": [6, 8], "abov": [6, 8], "cartesian_motion_controller_spawn": [6, 8, 9], "motion": [6, 8, 9], "motion_control_handle_spawn": [6, 8, 9], "cartesian": [6, 8, 9], "whose": [6, 8], "variabl": [6, 8, 20, 21], "wai": [6, 8, 13, 15, 17, 20, 22], "rviz_config": [6, 8, 9], "cartesian_controller_simul": [6, 8, 9], "rviz2": [6, 8, 9], "anoth": [6, 8, 13, 17], "group": [6, 8], "consistitut": [6, 8], "describ": [9, 13, 14], "tutori": 9, "declar": 9, "docker": [10, 12, 13, 14, 17], "github": [10, 11, 12, 14, 15, 16, 17, 19], "ci": [10, 11, 12], "cd": [10, 11, 12, 20, 22], "runner": [10, 11, 12, 15, 17], "workflow": [10, 15, 17, 19], "trigger": [10, 15], "job": [10, 15], "integr": [10, 13], "guid": [11, 12], "essenc": [11, 12], "get": [11, 12, 13], "ca": [11, 12], "certif": [11, 12], "gnupg": [11, 12], "m": [11, 12], "0755": [11, 12], "fssl": [11, 12], "download": [11, 12, 20, 21], "linux": [11, 12, 25], "dearmor": [11, 12], "chmod": [11, 12], "r": [11, 12], "version_codenam": [11, 12], "stabl": [11, 12], "ce": [11, 12], "containerd": [11, 12], "io": [11, 12], "buildx": [11, 12], "plugin": [11, 12], "compos": [11, 12], "you": [11, 12, 20, 22], "plan": [11, 12], "privileg": [11, 12], "sock": [11, 12], "666": [11, 12], "var": [11, 12], "run": [11, 12, 13, 14, 15, 17], "continu": 13, "deliveri": 13, "allow": [13, 16], "deploi": [13, 19], "project": [13, 19, 23, 25], "entiti": [13, 14], "top": [13, 14], "practic": [13, 14], "imag": [13, 14, 17], "remot": [13, 14], "server": [13, 14], "avoid": [13, 14], "limit": [13, 14], "hardwar": [13, 14], "go": [13, 14, 20, 21], "tab": [13, 14, 15], "click": [13, 14], "context": [13, 14], "also": [13, 14, 17], "arbitrari": [13, 15], "event": [13, 15, 16, 20, 22], "displai": [13, 15], "websit": [13, 15, 20, 21], "seri": [13, 15], "consist": [13, 15], "sever": [13, 15], "condit": [13, 16], "push": [13, 16], "specif": [13, 16, 17], "branch": [13, 16, 19], "pull": [13, 16], "request": [13, 16], "tag": [13, 16, 17], "schedul": [13, 16], "commit": [13, 16], "togeth": [13, 16], "workflow_dispatch": [13, 16], "cron": [13, 16], "task": [13, 16], "dai": [13, 16], "ad": [13, 16], "midnight": [13, 16], "check": [13, 16], "within": [13, 17], "error": [13, 17, 20, 22], "mark": [13, 17], "fail": [13, 17], "One": [13, 17], "think": [13, 17], "actual": [13, 17, 19, 24, 25], "so": [13, 17, 20, 21], "hub": [13, 17], "dockerfil": [13, 17], "environ": [13, 17, 20, 21], "sequenc": [13, 17], "checkout": [13, 17], "v4": [13, 17], "ros_w": [13, 17], "dash": [13, 17], "mandatori": [13, 17], "understand": [13, 17], "point": [13, 17, 23, 25], "intuit": [13, 17], "directli": [13, 17], "look": [13, 17], "usernam": [13, 17], "clone": [13, 17], "shell": [13, 17], "html": [13, 19, 23, 24, 25], "page": [13, 19, 20, 21, 23, 25], "gh": [13, 19], "serv": [13, 19], "yml": 13, "builder": 13, "static": 13, "web": [13, 23, 25], "built": [13, 20, 22], "write": [13, 20, 22], "permiss": 13, "content": [13, 23], "git": 13, "defaul": 13, "3": 13, "10": 13, "depenc": 13, "pip3": 13, "furo": [13, 24, 25], "copybutton": [13, 24, 25], "myst": [13, 24, 25], "parser": [13, 24, 25], "doc": 13, "depli": 13, "peaceiri": 13, "v3": 13, "github_token": 13, "secret": 13, "publish_dir": 13, "easili": [20, 21], "david": 20, "nardi": 20, "edu": [20, 21], "tarbal": [20, 21], "tar": [20, 21], "xf": [20, 21], "coppeliasim_edu": [20, 21], "mv": [20, 21], "option": [20, 21], "delet": [20, 21], "rm": [20, 21], "xz": [20, 21], "access": [20, 21, 24, 25], "termin": [20, 21], "rest": [20, 21], "snippet": [20, 21], "problem": [20, 21], "line": [20, 21, 22], "export": [20, 21], "coppeliasim_root_dir": [20, 21], "home": [20, 21], "simpli": [20, 21], "intern": [20, 22], "coppeliasim_root_fold": [20, 22], "ros2_packag": [20, 22], "meta": [20, 22], "geometry_msg": [20, 22], "msg": [20, 22], "wrench": [20, 22], "wrenchstamp": [20, 22], "std_msg": [20, 22], "multiarraydimens": [20, 22], "multiarraylayout": [20, 22], "float64multiarrai": [20, 22], "sensor_msg": [20, 22], "jointstat": [20, 22], "rosgraph_msg": [20, 22], "clock": [20, 22], "append": [20, 22], "want": [20, 22], "cat": [20, 22], "eof": [20, 22], "press": [20, 22], "enter": [20, 22], "appli": [20, 22], "symlink": [20, 22], "try": [20, 22], "verbos": [20, 22], "1": [20, 22], "makeflag": [20, 22], "j1": [20, 22], "handler": [20, 22], "console_direct": [20, 22], "parallel": [20, 22], "worker": [20, 22], "organ": [23, 25], "01_ros_2": [23, 25], "00_index": [23, 25], "rst": [23, 25], "01_cli": [23, 25], "02_packag": [23, 25], "01_workspac": [23, 25], "02_pkg_creation": [23, 25], "03_launch_fil": [23, 25], "02_linux": [23, 25], "01_topic": [23, 25], "02_topic": [23, 25], "conf": [23, 25], "md": [23, 25], "index": [23, 24, 25], "readm": [23, 25], "sphinx": [23, 24, 25], "wrote": [23, 25], "separ": [23, 25], "digit": [23, 25], "number": [23, 25], "alwai": [23, 25], "simplifi": [23, 25], "recurs": [23, 25], "restructur": [23, 25], "text": [23, 25], "though": [23, 25], "markdown": [23, 25], "seen": [23, 25], "discuss": [23, 25], "out": [23, 25], "extens": [23, 24, 25], "suitabl": [23, 25], "scale": [23, 25], "default": [23, 25], "choic": [23, 25], "tri": [24, 25], "condens": [24, 25], "everyon": [24, 25], "laboratori": [24, 25], "onlin": [24, 25], "webpag": [24, 25], "necessari": [24, 25], "theme": [24, 25], "small": [24, 25], "pip": [24, 25], "cover": 25, "util": 25}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"ros2": [0, 20, 22], "note": 0, "instal": [0, 11, 12, 20, 21], "cli": 1, "tool": 1, "workspac": [2, 3, 20, 22], "packag": [2, 4], "creation": [2, 4], "python": [2, 4], "launch": [2, 4, 5, 6, 8, 9], "file": [2, 4, 5, 6, 8, 9], "integr": [2, 4, 20, 22], "ad": [2, 4], "execut": [2, 4], "c": [2, 4], "cmake": [2, 4], "simul": [6, 9, 20], "setup": [6, 13, 15], "node": [6, 7], "descript": [6, 7], "linux": 10, "other": 10, "util": 10, "docker": 11, "github": 13, "action": [13, 14, 15], "ci": 13, "cd": 13, "runner": [13, 14], "self": [13, 14], "host": [13, 14], "workflow": [13, 16], "trigger": [13, 16], "job": [13, 17], "exampl": [13, 18], "build": [13, 19, 20, 22, 24, 25], "document": [13, 19, 24, 25], "sphinx": [13, 19], "coppelia": 20, "messag": [20, 22], "contribut": [23, 25], "idra": [24, 25], "lab": [24, 25], "open": [24, 25], "knowledg": [24, 25], "content": 25}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx": 60}, "alltitles": {"ROS2 Notes": [[0, "ros2-notes"]], "Installation": [[0, "installation"], [11, "installation"], [12, "installation"], [20, "installation"], [21, "installation"]], "CLI Tools": [[1, "cli-tools"]], "Workspaces and Packages": [[2, "workspaces-and-packages"]], "Workspaces": [[2, "workspaces"], [3, "workspaces"]], "Package creation": [[2, "package-creation"], [4, "package-creation"]], "Python package creation": [[2, "python-package-creation"], [4, "python-package-creation"]], "Launch files integration": [[2, "launch-files-integration"], [4, "launch-files-integration"]], "Adding executables": [[2, "adding-executables"], [4, "adding-executables"]], "C++ package creation": [[2, "c-package-creation"], [4, "c-package-creation"]], "CMake integration": [[2, "cmake-integration"], [4, "cmake-integration"]], "Launch files": [[2, "launch-files"], [5, "launch-files"]], "Simulation Setup": [[6, "simulation-setup"]], "Node description": [[6, "node-description"], [7, "node-description"]], "Launch file": [[6, "launch-file"], [8, "launch-file"]], "Simulation launch file": [[9, "simulation-launch-file"]], "Linux and other Utilities": [[10, "linux-and-other-utilities"]], "Docker": [[11, "docker"]], "Github Actions for CI/CD": [[13, "github-actions-for-ci-cd"]], "Action runners": [[13, "action-runners"], [14, "action-runners"]], "Self-hosted runners": [[13, "self-hosted-runners"], [14, "self-hosted-runners"]], "Actions setup": [[13, "actions-setup"], [15, "actions-setup"]], "Workflow triggers": [[13, "workflow-triggers"], [16, "workflow-triggers"]], "Jobs": [[13, "jobs"], [17, "jobs"]], "Examples": [[13, "examples"], [18, "examples"]], "Building documentation with Sphinx": [[13, "building-documentation-with-sphinx"], [19, "building-documentation-with-sphinx"]], "Coppelia Simulator": [[20, "coppelia-simulator"]], "ROS2 integration": [[20, "ros2-integration"], [22, "ros2-integration"]], "Messages": [[20, "messages"], [22, "messages"]], "Workspace build": [[20, "workspace-build"], [22, "workspace-build"]], "Contributing": [[23, "contributing"], [25, "contributing"]], "IDRA lab open knowledge": [[24, "idra-lab-open-knowledge"], [25, "idra-lab-open-knowledge"]], "Build the documentation": [[24, "build-the-documentation"], [25, "build-the-documentation"]], "Contents": [[25, "contents"]]}, "indexentries": {}})