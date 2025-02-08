def calculate_score(productivity, quality, timeliness):
    weights = {'productivity': 0.4, 'quality': 0.3, 'timeliness': 0.3}
    total_score = (productivity * weights['productivity']) + (quality * weights['quality']) + (timeliness * weights['timeliness'])
    return total_score