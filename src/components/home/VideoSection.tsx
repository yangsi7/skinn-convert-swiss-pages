import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, Heart, AlertCircle } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    {
      title: "Cardiac Health Assessment at Home",
      description: "Discover how SKIIN enables comprehensive cardiac monitoring from the comfort of your home",
      videoSrc: "/assets/videos/Myant-EU-cardiac-health-assesement-at-home.mp4",
      icon: Heart,
      duration: "2:15"
    },
    {
      title: "70% of Arrhythmias are Silent",
      description: "Learn why continuous monitoring is critical for detecting hidden heart conditions",
      videoSrc: "/assets/videos/Myant-EU-video-70-percent-of-arrythmia-are-silent.mp4",
      icon: AlertCircle,
      duration: "1:45"
    }
  ];

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-medium">Educational Videos</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Understanding Heart Health Monitoring
          </h2>
          <p className="text-lg text-muted-foreground">
            Watch these short videos to learn more about cardiac health and why continuous monitoring matters
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer hover:shadow-theme transition-all duration-300">
              <div className="relative aspect-video bg-background">
                <video 
                  className="w-full h-full object-cover"
                  poster={video.poster}
                  controls
                  preload="metadata"
                >
                  <source src={video.videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <PlayCircle className="w-12 h-12 mb-2" />
                    <span className="text-sm">{video.duration}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <video.icon className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                    <p className="text-muted-foreground">{video.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;