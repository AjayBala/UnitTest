steps to Include recaptcha
===================================

1.Common gmail account to access recaptcha 
    mail id: overstockb2b@gmail.com
	password: Overstock18
2. Login to this gmail account
3. Run --- npm install
4. Run --- npm run build
5. Run --- npm start	





steps for Docker installion and setup in window
===============================================

1. Download the Docker Toolbox on Windows from below URL

	https://docs.docker.com/toolbox/toolbox_install_windows/

2. Install the DockerToolbox.exe  as Administrator. If your not Adminstrator, get Local Admin Rights from your Admin.

3. DockerToolbox.exe install/run as Administrator. 

4. Once Installed, Shortcut icon showed on desktop. Run as Administrator. 

5. Check If docker successfully installed. give a command "docker --version" 
	
	If it's show the message "Docker version 18.03.0-ce, build 0520e24302"
	It's Successfully Installed, now ready to use.

	If it's show the any error. Docker not installed properly. please check with any admin person


Step for RUN our codes in our local machine
===========================================

1. Download the files from your mail

2. Extract the download file

3. Open CMD prompt, right click and Run as Administrator. 

4. Redirect the specific path in CMD prompt using "cd"
	e.g
	 c:/root> cd < your working file path >

5. Give command " docker --version " 

	If it's show the message "Docker version 18.03.0-ce, build 0520e24302"
	It's Successfully Installed, now ready to use.

6. Give command "docker build -t ostkbuild ."  [note: Don't miss the dot also]

7. Docker images successfull created.

8. Now we can run our image in specific port the command "docker run -d -p 8080:80 ostkbuild "  [ note: we can customize our port ]

9. Check you nginx default port. command "docker-machine ip default" [note: Mostly we got 192.168.99.100 ]

10. open any browser and give the url "http://192.168.99.100:8080"  [note: give your default  ]

11. we can see our docker image as page.


	