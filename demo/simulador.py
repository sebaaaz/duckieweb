#!/usr/bin/env python

import cv2
import rospy #importar ros para python
from duckietown_msgs.msg import Twist2DStamped # importar mensajes de ROS tipo String y tipo Int32


class Simulador(object):
	def __init__(self, args):
		super(Simulador, self).__init__()
		self.args = args
		self.publisher = rospy.Publisher("/duckiebot/wheels_driver_node/car_cmd", Twist2DStamped, queue_size=10)
		self.twist = Twist2DStamped()
		
		nothing = lambda x: x

		cv2.namedWindow('Simulador')
		cv2.createTrackbar('Linear','Simulador',100,200,nothing)
		cv2.createTrackbar('Angular','Simulador',100,200,nothing)


	def actualizar(self):
		while 1:
			k = cv2.waitKey(1)
			if k == 27:
				break

			linear = cv2.getTrackbarPos('Linear','Simulador') - 100
			angular = cv2.getTrackbarPos('Angular','Simulador') - 100

			linear = linear / 100.0
			angular = angular / -12.5


			self.twist.v = linear
			self.twist.omega = angular
			
			self.publisher.publish(self.twist)

def main():
	rospy.init_node('simulador') #creacion y registro del nodo!

	obj = Simulador('args') # Crea un objeto del tipo Simulador, cuya definicion se encuentra arriba

	obj.actualizar() #llama al metodo publicar del objeto obj de tipo Simulador

if __name__ =='__main__':
	main()
