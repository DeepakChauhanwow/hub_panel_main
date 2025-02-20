export const PDFSIZE = 100000;

export const DEFAULT_IMAGE = {
	DEFAULT_PDF_IMG: 'assets/default_images/pdf_img.png',
	USER_PROFILE: 'assets/default_images/profile.png',
	DOCUMENT_PROFILE:'assets/default_images/uploading.png',
	USER_SQUARE: 'assets/default_images/user_square.png',
	PICKUP_ICON: 'assets/default_images/map_pin/pickup.png',
	DESTINATION_ICON: 'assets/default_images/map_pin/destination.png',
	DRIVER_ICON: 'assets/default_images/map_pin/driver.png',
	STOP_ICON: 'assets/default_images/map_pin/stop_icon.svg',
	CATEGORY: '/assets/img/default_images/category.png',
}
export const DATE_FORMAT = {
	DD_MM_YYYY_HH_MM_A: 'dd MMM yyyy hh:mm a',
	DD_MM_YY_HH_MM_A: 'dd MMM yy - hh:mm a',
	DD_MM_YYYY: 'dd MMM yyyy',
	D_MMM_H_MM_A:"d MMM - h:mm a",
	dd_mm_yyyy:'dd/MM/yyyy',
}

export const TRIP_TYPE = {
	TRIP_TYPE_NORMAL: 0,
	TRIP_TYPE_VISITOR: 1,
	TRIP_TYPE_HOTEL: 2,
	TRIP_TYPE_DISPATCHER: 3,
	TRIP_TYPE_SCHEDULE: 5,
	TRIP_TYPE_PROVIDER: 6,
	TRIP_TYPE_CORPORATE: 7,

	TRIP_TYPE_AIRPORT: 11,
	TRIP_TYPE_ZONE: 12,
	TRIP_TYPE_CITY: 13,
	TRIP_TYPE_CAR_RENTAL: 14,
	TRIP_TYPE_GUEST_TOKEN: 15,
}
export const CANCEL_REASON = {  labels: ["My Driver I couldn't connect.", 'Wrong address or location shown.', 'The eta was too long.']}

export const PROVIDER_TYPE = {
	PROVIDER_TYPE_PARTNER : 1
}

export const TRIP_STATUS = {
	RUNNING: 1,
	SCHEDULED: 2,
	COMPLETED: 3,
	CANCELLED: 4
}

export const PROVIDER_STATUS = {
	WAITING: 0,
	ACCEPTED: 0,
	ACCEPT: 1,
	COMING: 2,
	AFTER_TIME_WAITING: 3,
	ARRIVED: 4,
	STARTED: 6,
	COMPLETED: 9
}

export const PROVIDER_ACCEPTED = {
	WAITING: 0,
	ACCEPTED: 1,
	AFTER_TIME_WAITING: 3,
}

export const EXPORT_HISTORY_TYPE = {
	HISTORY : 12,
	RUNNING_REQUEST : 13
}

export const PAYMENT_GATEWAY = {
	stripe: 10,
	paystack: 11,
	payu: 12,
	paytabs: 13,
	paypal: 14,
	razorpay: 15
};

export const VEHICLE_TYPE = {
	NORMAL : 0,
	EV : 1,
}

export  const VEHICLE_HISTORY_TYPE = {
	ADDED: 0,
	UPDATED: 1,
	ASSIGNED: 2,
	UNASSIGNED: 3,
	PICKED: 4,
	DROPPED: 5,
}

export  const VEHICLE_HISTORY_TYPE_STRING = {
	[VEHICLE_HISTORY_TYPE.ADDED]: 'label-title.added',
	[VEHICLE_HISTORY_TYPE.UPDATED]: 'label-title.updated',
	[VEHICLE_HISTORY_TYPE.ASSIGNED]: 'label-title.assigned',
	[VEHICLE_HISTORY_TYPE.UNASSIGNED]: 'label-title.unassigned',
	[VEHICLE_HISTORY_TYPE.PICKED]: 'label-title.picked',
	[VEHICLE_HISTORY_TYPE.DROPPED]: 'label-title.dropped',
}

export const TRIP_STATUS_TYPE_VALUE = {
	USER: 1,
	PROVIDER: 2,
	PARTNER: 3,
	CORPORATE: 4,
	HOTEL: 5,
	DISPATCHER: 6,
	VEHICLE: 7,
	ADMIN: 8,
	HUB:9,
}

export const TRIP_STATUS_TYPE_VALUE_STRING = {
	[TRIP_STATUS_TYPE_VALUE.USER]: 'label-title.user',
	[TRIP_STATUS_TYPE_VALUE.PROVIDER]: 'label-title.driver',
	[TRIP_STATUS_TYPE_VALUE.PARTNER]: 'label-title.partner',
	[TRIP_STATUS_TYPE_VALUE.CORPORATE]: 'label-title.corporate',
	[TRIP_STATUS_TYPE_VALUE.HOTEL]: 'menu.hotel',
	[TRIP_STATUS_TYPE_VALUE.DISPATCHER]: 'menu.dispatcher',
	[TRIP_STATUS_TYPE_VALUE.VEHICLE]: 'label-title.vehicle',
	[TRIP_STATUS_TYPE_VALUE.ADMIN]: 'label-title.admin',
}